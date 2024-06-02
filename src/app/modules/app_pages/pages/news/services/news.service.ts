import { Injectable, inject } from '@angular/core';
import { addIcons } from 'ionicons';
import { addCircle } from 'ionicons/icons';
import { GlobalsServices } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  globals: GlobalsServices = inject(GlobalsServices);
  news: Array<any> = [
    {
        "title": "YouTube Dominates as the Most Searched Term",
        "image": "https://i2-prod.football.london/incoming/article29277073.ece/ALTERNATES/s810/0_trevoh-chalobah-chelsea.jpg",
        "comments": 120,
        "category": "Technology",
        "date": "2024-06-01"
    },
    {
        "title": "Amazon's Prime Day Breaks Sales Records",
        "image": "https://assets.goal.com/images/v3/blt77fb6eceae7dc19b/Tosin_Adarabioyo.jpg?auto=webp&format=pjpg&width=1080&quality=60",
        "comments": 87,
        "category": "Business",
        "date": "2024-06-02"
    },
    {
        "title": "Hurricane Season Brings Devastation to Coastal Areas",
        "image": "https://static01.nyt.com/images/2024/06/01/multimedia/01themorning-nl/01themorning-nl-superJumbo.jpg?quality=75&auto=webp",
        "comments": 45,
        "category": "Weather",
        "date": "2024-06-03"
    },
    {
        "title": "AI Writing Tools Revolutionize Content Creation",
        "image": "https://static01.nyt.com/images/2024/06/01/multimedia/01themorning-nl-film-ljvw/01themorning-nl-film-ljvw-superJumbo.jpg?quality=75&auto=webp",
        "comments": 62,
        "category": "Technology",
        "date": "2024-06-04"
    },
    {
        "title": "War in Sudan: Ongoing Conflict and Humanitarian Crisis",
        "image": "https://static01.nyt.com/images/2024/06/01/us/politics/01themorning-nl-music/01themorning-nl-music-superJumbo.jpg?quality=75&auto=webp",
        "comments": 105,
        "category": "World News",
        "date": "2024-06-05"
    },
    {
        "title": "Chandrayaan-3: India's Lunar Mission Success",
        "image": "https://static01.nyt.com/images/2024/05/31/multimedia/01themorning-nl-news/01themorning-nl-news-superJumbo.jpg?quality=75&auto=webp",
        "comments": 78,
        "category": "Science",
        "date": "2024-06-06"
    },
    {
        "title": "Lab Grown Diamonds Surge in Popularity",
        "image": "https://static01.nyt.com/images/2024/06/01/multimedia/01themorning-nl-recipe-gbmv/01themorning-nl-recipe-gbmv-superJumbo.jpg?quality=75&auto=webp",
        "comments": 34,
        "category": "Lifestyle",
        "date": "2024-06-07"
    },
    {
        "title": "TikTok Ads: A New Era of Digital Marketing",
        "image": "https://static01.nyt.com/images/2024/06/01/multimedia/01themorning-nl-animations/01themorning-nl-animations-superJumbo.jpg?quality=75&auto=webp",
        "comments": 92,
        "category": "Marketing",
        "date": "2024-06-08"
    },
    {
        "title": "Permanent Jewelry: The Latest Fashion Trend",
        "image": "https://static01.nyt.com/images/2024/06/01/multimedia/01themorning-nl-games/01themorning-nl-games-superJumbo-v2.jpg?quality=75&auto=webp",
        "comments": 57,
        "category": "Fashion",
        "date": "2024-06-09"
    },
    {
        "title": "AI in Marketing: Enhancing Consumer Engagement",
        "image": "https://assets.goal.com/images/v3/blt03aeada7889eabf7/GOAL_-_Blank_WEB_-_Facebook.jpg?auto=webp&format=pjpg&width=1080&quality=60",
        "comments": 84,
        "category": "Business",
        "date": "2024-06-10"
    }
]

  val = 0;
  chips = ['For You', 'News', 'Following', 'Corona Virus', 'Discovery Plan', 'My City', 'Cricket'];

  constructor() {
    addIcons({
      "add-circle": addCircle
    })
  }
}
