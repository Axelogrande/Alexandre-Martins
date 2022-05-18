import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  public news = [
    { title: "Aqui está o primeiro título", description: "Descrição da notícia", year: "2022", image: "https://th.bing.com/th/id/R.63ef46e02cf699dc99deb9baad9fb88b?rik=gYdmgyifJ1AfdQ&riu=http%3a%2f%2fs2.glbimg.com%2fQx4fJgyBhou7N75SkViXPe6WIRM%3d%2f620x0%2ftop%2fs.glbimg.com%2fjo%2feg%2ff%2foriginal%2f2016%2f07%2f19%2fdollynho.png&ehk=nqawO8OWRcTsaCPQthQiAIWUdVSwznh7v0tvFZ4vow0%3d&risl=&pid=ImgRaw&r=0" },
  { title: "segundo titulo", description: "morte por engano", year: "1969" },
  { title: "terceiro titulo", description: "sporting campeão" }
  ]
  constructor() { }

  ngOnInit() {
  }

}
