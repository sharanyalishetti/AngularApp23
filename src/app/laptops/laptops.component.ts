import { Component, OnInit } from '@angular/core';
import {product} from '../models/product.model';
@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent {

  products : product [] = [
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

  productSendByChild = [];

  productCount : number = 0 ;



  getProductDetailsFromChild(productTitle){
    this.productSendByChild.push(productTitle);
    this.productCount++;
    
  }

}
