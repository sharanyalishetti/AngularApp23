import { Injectable } from '@angular/core';
import {product} from './models/product.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  laptops : product [] = [
    {
      productTitle : "Dell",
      description : "Dell is a brand known across the world for its expertise in computer technology. The US-based multinational computer technology company is the home to a wide range of personal computers and laptops. It has its laptops categorized under multiple sub-series such as Inspiron, Latitude, Vostro, Alienware, and XPS. These categories include laptops for every specific requirement, be it for personal use or professional",
      productImage : "https://thumbs.dreamstime.com/b/laptop-computer-displaying-logo-dell-poznan-pol-mar-american-multinational-technology-company-develops-sells-repairs-178035542.jpg",
    },
    {
      productTitle : "Lenevo",
      description : "Lenovo ThinkPad is a Windows 10 laptop with a 14.00-inch display that has a resolution of 1920x1080 pixels. It is powered by a Core i7 processor and it comes with 12GB of RAM. The Lenovo ThinkPad packs 256GB of SSD storage. Graphics are powered by Intel HD Graphics 520.",
      productImage : "https://img.business.com/o/aHR0cHM6Ly93d3cuYnVzaW5lc3NuZXdzZGFpbHkuY29tL2ltYWdlcy9pLzAwMC8wMDgvODY1L2kwMi9MZW5vdm8tVGhpbmtQYWQtWDI1MC1QaG90by0xLmpwZw==",
    },
    {
      productTitle : "HP",
      description : "HP NoteBook is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1366x768 pixels. It is powered by a Core i5 processor and it comes with 8GB of RAM. The HP NoteBook packs 256GB of SSD storage. Graphics are powered by Intel HD Graphics 620.",
      productImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrQPNIw-9uB2Gk9oGpOIOkfdtFu3YaLJ6uDA&usqp=CAU",
    },
    {
      productTitle : "Asus",
      description : "Asus R558UQ-DM1286T Laptop (Core i5 7th Gen/8 GB/1 TB/Windows 10/2 GB) laptop has a 15.6 Inches (39.62 cm) display for your daily needs. This laptop is powered by Intel Core i5-7200U (7th Gen) processor, coupled with 8 GB of RAM and has 1 TB HDD storage at this price point.",
      productImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpWf7tEKgNvr6IqOK8Kbv6RgT_vVHSkuTXg&usqp=CAU",
    },
    {
      productTitle : "Acer",
      description : "Acer Aspire is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1920x1080 pixels. It is powered by a Core i7 processor and it comes with 8GB of RAM. The Acer Aspire packs 1TB of HDD storage. Graphics are powered by Intel HD Graphics 620.",
      productImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_Qo3wrs-PYf-PmTJ0cEwybNzBrmgR04hmw&usqp=CAU",
    },
    {
      productTitle : "Apple",
      description : "Apple MacBook Pro is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels. It is powered by a Core i5 processor and it comes with 12GB of RAM. The Apple MacBook Pro packs 512GB of SSD storage.",
      productImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmbxhkinnu_FqG-5wZz1VJZnCBGR4D-X9gTQ&usqp=CAU",
    },


  ];

  mobiles : product[] = [

    {
    productTitle:"Samsung",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://www.sathya.in/Media/Default/Thumbs/0038/0038136-vivo-s1-pro-black8gb-ram-128gb-storage-250.jpg"
    },
    {
    productTitle:"Samsung",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://priceintanzania.com/wp-content/uploads/2019/04/Samsung-Galaxy-A70-Price-in-Tanzania.jpg"
    },
    
    {
    productTitle:"Honor",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://5.imimg.com/data5/AW/IX/GLADMIN-53160395/galaxy-s-500x500.png"
    },
    
    {
    productTitle:"Iphone-11",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://img.tatacliq.com/images/i7/1348Wx2000H/MP000000005562292_1348Wx2000H_202011300234051.jpeg"
    },
    
    {
    productTitle:"OnePlus",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://670354.smushcdn.com/2260778/wp-content/uploads/2021/03/AMZ101-2.jpg"
    },
    
    {
    productTitle:"Google pixel",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore amet dolor iusto",
    productImage:"https://www.91-img.com/pictures/105546-v1-google-pixel-xl-mobile-phone-large-1.jpg"
    }
    
    ];

    televisions : product[] = [
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


  getLaptopsData() : product[]{
    return this.laptops;
  }

  getMobilesData() : product[] {
    return this.mobiles;
  }

  getTelevisionsData() : product[] {
    return this.televisions;
  }
  

}
