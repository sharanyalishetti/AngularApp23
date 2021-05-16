import { Component, OnInit } from '@angular/core';
import { product } from '../models/product.model';
@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent {

  products : product[] = [
    {
      productTitle : 'Panasonic',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aspernatur minus doloremque quod distinctio dicta delectus qui, alias et quaerat provident facere hic sequi eius ex. Sapiente fugit rerum necessitatibus?',
      productImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQglJ24WDsXGgClreZmqo83cIuSaneIcJ1uCg&usqp=CAU'
    },
    {
      productTitle : 'Samsung',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aspernatur minus doloremque quod distinctio dicta delectus qui, alias et quaerat provident facere hic sequi eius ex. Sapiente fugit rerum necessitatibus?',
      productImage : 'https://i.pinimg.com/originals/cc/c0/a1/ccc0a1bdca71a685d57671e7c745c07d.jpg'
    },
    {
      productTitle : 'Sony',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aspernatur minus doloremque quod distinctio dicta delectus qui, alias et quaerat provident facere hic sequi eius ex. Sapiente fugit rerum necessitatibus?',
      productImage : 'https://5.imimg.com/data5/RB/ID/MY-47795804/sony-bravia-led-500x500.jpg'
    },
    {
      productTitle : 'LG',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aspernatur minus doloremque quod distinctio dicta delectus qui, alias et quaerat provident facere hic sequi eius ex. Sapiente fugit rerum necessitatibus?',
      productImage : 'https://5.imimg.com/data5/BO/HO/MY-11035400/lg-tv-32-inch-and-24-inch-500x500.jpeg'
    },
    {
      productTitle : 'Micromax',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aspernatur minus doloremque quod distinctio dicta delectus qui, alias et quaerat provident facere hic sequi eius ex. Sapiente fugit rerum necessitatibus?',
      productImage : 'https://rukminim1.flixcart.com/image/416/416/television/n/y/f/micromax-50c5220mhd-original-imaejj7rajfayqf6.jpeg?q=70'
    },
    {
      productTitle : 'Haier',
      description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aspernatur minus doloremque quod distinctio dicta delectus qui, alias et quaerat provident facere hic sequi eius ex. Sapiente fugit rerum necessitatibus?',
      productImage : 'https://www.bajajfinservmarkets.in/emistore/media/catalog/product/l/e/le39b9600_base.jpg'
    }
  ];

  productSendByChild = [];

  productCount : number = 0 ;



  getProductDetailsFromChild(productTitle){
    this.productSendByChild.push(productTitle);
    this.productCount++;
    
  }


}
