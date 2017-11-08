import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { ProductService } from '../product.service';
import { Product } from '../../models/productlist';
import { UserInfo } from '../../models/userinfo';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Array<Product>;
  currentUser: UserInfo;

  constructor(private sessionSVC: SessionService, private productservice: ProductService) { }

  ngOnInit() {

    debugger;

    if (sessionStorage.currentuser!=undefined) {

      this.currentUser = JSON.parse(sessionStorage.currentuser);

      // if (this.sessionSVC.userLoginState) {
      if (this.currentUser.status == "success") {

        // this.productservice.retrieveProduct(this.sessionSVC.loginUserInfo)
        this.productservice.retrieveProduct(this.currentUser)
          .then((products: Array<Product>) => {

            this.products = products;

          }).catch((errorMsg: string) => {
            //TODO: show error message popup
            alert(errorMsg);
          });
      }
    }
  }
}
