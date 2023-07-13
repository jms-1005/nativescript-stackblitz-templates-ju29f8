import { Component } from '@angular/core';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  myTitle = 'This title is from the component'; 
  ///this is an edit  another edit

  products: any[] = [
    {
      id: 1,
      title: '85 inch TV',
      price: 1999,
      image:
        'https://cdn.thewirecutter.com/wp-content/media/2022/10/lcd-led-tv-2048px-0943-3x2-1.jpg',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: 2,
      title: '65 inch TV',
      price: 999,
      image:
        'https://images.samsung.com/is/image/samsung/africa-en-fhd-t5300-ua40t5300auxly-frontblack-243705836?$650_519_PNG$',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: 3,
      title: '25 inch TV',
      price: 99,
      image:
        'https://cigars.roku.com/v1/http%3A%2F%2Fimage.roku.com%2Fw%2Frapid%2Fimages%2Fundefined%2F07ebed9a-b879-40a2-b67e-37fd40304e28.png',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: 3,
      title: '25 inch TV',
      price: 99,
      image:
        'https://cigars.roku.com/v1/http%3A%2F%2Fimage.roku.com%2Fw%2Frapid%2Fimages%2Fundefined%2F07ebed9a-b879-40a2-b67e-37fd40304e28.png',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];
}
