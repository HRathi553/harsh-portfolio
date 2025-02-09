import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 700,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000
  }

  @ViewChild('imgContainer') imgContainer: ElementRef;

  projects: any = []

  constructor(
  ) { }

  ngOnInit(): void {

    this.projects = [
      {
        "Title": "Portfolio Website",
        "Description": "Designed and developed a portfolio website using <span class='underline'>Angular 13</span>, showcasing a curated collection of projects and accomplishments. Leveraged Angular's powerful features to create a user-friendly and responsive platform that demonstrates technical skills, creativity, and a strong commitment to professionalism",
        "demoLink": "https://cafeweb.z13.web.core.windows.net/home",
        "date": "(Aug 2023 - Sept 2023)",
        "imgs": [
          "assets/images/portfolio/portfolio1.png",
          "assets/images/portfolio/portfolio2.png",
          "assets/images/portfolio/portfolio3.png",
        ],
        "Technologies": ["Angular", "SCSS", "Azure"]
      },
      {
        "Title": "Cafe Management App",
        "Description": "This project featured <span class='underline'>JWT token authentication</span>, <span class='underline'>role-based access</span> control, and <span class='underline'>Google OAuth2</span> for secure email capabilities. Integrated <span class='underline'>JQuery & Bootstrap</span> for a polished user interface & implemented <span class='underline'>lazy loading</span> for optimized performance. <span class='underline'>Router guards & animations</span> were used for a seamless user experience. Also developed <span class='underline'>reactive forms</span>, handled <span class='underline'>PDF generation & downloads</span>, & leveraged <span class='underline'>dependency injection & RxJS</span> for efficient asynchronous operations with <span class='underline'>Interceptors</span> for handling HTTP requests and responses. This project seamlessly integrated <span class='underline'>Angular</span> with <span class='underline'>Node.js</span> & <span class='underline'>PostgreSQL</span>, managing product categories, products, order, view-bill and user-mgmt components for streamlined cafe management.",
        "demoLink": "https://cafeweb.z13.web.core.windows.net/home",
        "date": "(May 2023 - Sept 2023)",
        "imgs": [
          "assets/images/cafe/cafe1.png",
          "assets/images/cafe/cafe2.png",
          "assets/images/cafe/cafe3.png",
          "assets/images/cafe/cafe4.png",
          "assets/images/cafe/cafe5.png",
          "assets/images/cafe/cafe6.png",
          "assets/images/cafe/cafe7.png",
        ],
        "Technologies": ["Angular", "Bootstrap", "JQuery", "RxJS", "NodeJs", "PostgreSQL", "Azure"]
      },
      // {
      //   "Title": "Proyexiot",
      //   "Description": "Data monitoring platform belonging to water wells, tugboats, and various installations made from scratch with auth module, <span class='underline'>configurable graphics</span>, <span class='underline'>configurable alarms</span>, <span class='underline'>user management</span>, and <span class='underline'>geolocation with openlayers.</span>",
      //   "imgs": [
      //       "assets/images/solidity-blog/solidity-blog1.png",
      //       "assets/images/solidity-blog/solidity-blog2.png",
      //       "assets/images/solidity-blog/solidity-blog3.png",
      //       "assets/images/solidity-blog/solidity-blog4.png",
      //       "assets/images/solidity-blog/solidity-blog5.png",
      //   ],
      //   "Technologies": ["Laravel", "Angular", "SASS", "Angular Material", "RxJS"]
      // },
      {
        "Title": "Tankhapay",
        "Description": "Significantly contributed to frontend development of an <span class='underline'>in-house webapp</span> for <span class='underline'>TankhaPay</span>, a product of <span class='underline'>Akal Infomation Sys Pvt Ltd</span>, which successfully secured funding of <span class='underline'>2.7 million</span> from Japanese investors. The platform efficiently manages employer and employee profiles, catering to a diverse workforce, including gig workers, blue-collar, and white-collar employees, streamlining the registration process and enhancing workforce management",
        "demoLink": "https://theprint.in/ani-press-releases/tankhapay-developed-by-akal-information-systems-ltd-gets-2-7-million-usd-funding-from-japanese-investors/1638984/",
        "date": "Aug 2022 - Present",
        "imgs": [
          // "assets/images/hands-game.png",
          "assets/images/crm-imgs/crm0.png",
          "assets/images/crm-imgs/crm01.png",
          // "assets/images/crm-imgs/crm02.png",
          "assets/images/crm-imgs/crm03.png",
          "assets/images/crm-imgs/crm04.png",
          "assets/images/crm-imgs/crm05.png",
          "assets/images/crm-imgs/crm06.png",
          // "assets/images/crm-imgs/crm07.png",
          "assets/images/crm-imgs/crm08.png",
          "assets/images/crm-imgs/crm09.png",
        ],
        // "ghLink": "https://github.com/andresjosehr/hands-game",
        "Technologies": ["Angular", "CSS", "Bootstrap", "JQuery", "NodeJs", "PostgreSQL"]
      },
      {
        "Title": "Solidity - Blogs",
        "Description": "A site that helps you learn <span class='underline'>Solidity</span> by <span class='underline'>Smart Contract</span> examples made by wixsite-builder.",
        "demoLink": "https://harshrathi0553.wixsite.com/solidity",
        "date": "(Nov 2021 - Feb 2022)",
        "imgs": [
          "assets/images/solidity-blog/solidity-blog1.png",
          "assets/images/solidity-blog/solidity-blog2.png",
          "assets/images/solidity-blog/solidity-blog3.png",
          "assets/images/solidity-blog/solidity-blog4.png",
          "assets/images/solidity-blog/solidity-blog5.png",
        ],
        "Technologies": ["Solidity", "Smart Contracts", "Remix IDE", "Blockchain Basics"]
      },
      {
        "Title": "Notes_App",
        "Description": "Developed Notes_App, a <span class='underline'>native Android</span> note-taking app available on the <span class='underline'>Google PlayStore</span>. Leveraging Android Studio, Java, and XML, Implemented the <span class='underline'>MVVM architecture</span> and integrated <span class='underline'>Room Database</span> for efficient data storage. It was designed for optimal performance, user-friendliness, and reliability.",
        "date": "Jan 2022 - Feb 2022",
        "imgs": [
          "assets/images/mobile-apps/notes-app1.png",
          "assets/images/mobile-apps/notes-app2.png"
        ],
        // "imgs": ["assets/images/countries-viewer.png"],
        // "ghLink": "https://github.com/andresjosehr/countries-viewer",
        "demoLink": "https://play.google.com/store/apps/details?id=com.MyApp.notes_app",
        "Technologies": ["Android", "Java", "Android Studio", "XML", "MVVM"]
      },
      {
        "Title": "eDrona",
        "Description": "Your B.Tech Study Companion for MDU University. <span class='underline'>Free, high-quality notes</span> for MDU B.Tech students. Streamlined online learning in the pandemic era. Expanding resources across all engineering branches. Your go-to destination for on-the-go learning",
        "date": "Jan 2022 - Feb 2022",
        "imgs": [
          "assets/images/mobile-apps/edrona1.png",
          "assets/images/mobile-apps/edrona2.png",
          "assets/images/mobile-apps/edrona3.png"
        ],
        "demoLink": "https://play.google.com/store/apps/details?id=com.harshrathi.edrona",
        "Technologies": ["Android", "Java", "Android Studio", "XML", "Google Drive"]
      },
    ]

  }

  debug() {

    this.imgContainer.nativeElement.scroll({
      top: this.imgContainer.nativeElement.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

}
