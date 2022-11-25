import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenses-page',
  templateUrl: './expenses-page.page.html',
  styleUrls: ['./expenses-page.page.scss'],
})
export class ExpensesPagePage implements OnInit {

  // chartLabels: any;
  // chartData = [
  //   {
  //     "name": "1",
  //     "series": [
  //         {
  //           "name": "expenses",
  //           "value": 20
  //         },
  //         {
  //           "name": "income",
  //           "value": 50
  //         }
  //     ]
  //   },
  //   {
  //     "name": "2",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 10
  //       },
  //       {
  //         "name": "income",
  //         "value": 30
  //       }
  //     ]
  //   },
  //   {
  //     "name": "3",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 0
  //       },
  //       {
  //         "name": "income",
  //         "value":70
  //       }
  //     ]
  //   },
  //   {
  //     "name": "4",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 50
  //       },
  //       {
  //         "name": "income",
  //         "value": 35
  //       }
  //     ]
  //   },
  //   {
  //     "name": "5",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 0
  //       },
  //       {
  //         "name": "income",
  //         "value": 50
  //       }
  //     ]
  //   },
  //   {
  //     "name": "6",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 12
  //       },
  //       {
  //         "name": "income",
  //         "value": 48
  //       }
  //     ]
  //   },
  //   {
  //     "name": "7",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 10
  //       },
  //       {
  //         "name": "income",
  //         "value": 35
  //       }
  //     ]
  //   },
  //   {
  //     "name": "8",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 70
  //       },
  //       {
  //         "name": "income",
  //         "value": 10
  //       }
  //     ]
  //   },
  //   {
  //     "name": "9",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 22
  //       },
  //       {
  //         "name": "income",
  //         "value": 35
  //       }
  //     ]
  //   },
  //   {
  //     "name": "10",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 33
  //       },
  //       {
  //         "name": "income",
  //         "value": 44
  //       }
  //     ]
  //   },
  //   {
  //     "name": "11",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 20
  //       },
  //       {
  //         "name": "income",
  //         "value": 10
  //       }
  //     ]
  //   },
  //   {
  //     "name": "12",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 40
  //       },
  //       {
  //         "name": "income",
  //         "value": 60
  //       }
  //     ]
  //   },
  //   {
  //     "name": "13",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 5
  //       },
  //       {
  //         "name": "income",
  //         "value": 66
  //       }
  //     ]
  //   },
  //   {
  //     "name": "14",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 0
  //       },
  //       {
  //         "name": "income",
  //         "value": 80
  //       }
  //     ]
  //   },
  //   {
  //     "name": "15",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 50
  //       },
  //       {
  //         "name": "income",
  //         "value": 30
  //       }
  //     ]
  //   },
  //   {
  //     "name": "16",
  //     "series": [
  //         {
  //           "name": "expenses",
  //           "value": 20
  //         },
  //         {
  //           "name": "income",
  //           "value": 50
  //         }
  //     ]
  //   },
  //   {
  //     "name": "17",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 10
  //       },
  //       {
  //         "name": "income",
  //         "value": 30
  //       }
  //     ]
  //   },
  //   {
  //     "name": "18",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 0
  //       },
  //       {
  //         "name": "income",
  //         "value":70
  //       }
  //     ]
  //   },
  //   {
  //     "name": "19",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 50
  //       },
  //       {
  //         "name": "income",
  //         "value": 35
  //       }
  //     ]
  //   },
  //   {
  //     "name": "20",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 0
  //       },
  //       {
  //         "name": "income",
  //         "value": 50
  //       }
  //     ]
  //   },
  //   {
  //     "name": "21",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 12
  //       },
  //       {
  //         "name": "income",
  //         "value": 48
  //       }
  //     ]
  //   },
  //   {
  //     "name": "22",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 10
  //       },
  //       {
  //         "name": "income",
  //         "value": 35
  //       }
  //     ]
  //   },
  //   {
  //     "name": "23",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 70
  //       },
  //       {
  //         "name": "income",
  //         "value": 10
  //       }
  //     ]
  //   },
  //   {
  //     "name": "24",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 22
  //       },
  //       {
  //         "name": "income",
  //         "value": 35
  //       }
  //     ]
  //   },
  //   {
  //     "name": "25",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 33
  //       },
  //       {
  //         "name": "income",
  //         "value": 44
  //       }
  //     ]
  //   },
  //   {
  //     "name": "26",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 20
  //       },
  //       {
  //         "name": "income",
  //         "value": 10
  //       }
  //     ]
  //   },
  //   {
  //     "name": "27",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 40
  //       },
  //       {
  //         "name": "income",
  //         "value": 60
  //       }
  //     ]
  //   },
  //   {
  //     "name": "28",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 5
  //       },
  //       {
  //         "name": "income",
  //         "value": 66
  //       }
  //     ]
  //   },
  //   {
  //     "name": "29",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 0
  //       },
  //       {
  //         "name": "income",
  //         "value": 80
  //       }
  //     ]
  //   },
  //   {
  //     "name": "30",
  //     "series": [
  //       {
  //         "name": "expenses",
  //         "value": 50
  //       },
  //       {
  //         "name": "income",
  //         "value": 30
  //       }
  //     ]
  //   },
      
  // ];
  chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Auguest', 'September', 'October', 'November', 'December'];
 
  chartData = [
   {
     "name": "Jan",
     "value": 65
   },
   {
     "name": "Feb",
     "value": 59
   },
   {
     "name": "Mar",
     "value": 80
   },
   {
     "name": "Apr",
     "value": 81
   },
   {
     "name": "May",
     "value": 56
   },
   {
     "name": "Jun",
     "value": 55
   },
   {
     "name": "Jul",
     "value": 40
   },
   {
     "name": "Aug",
     "value": 100
   },
   {
     "name": "Sep",
     "value": 70
   },
   {
     "name": "Oct",
     "value": 35
   },
   {
     "name": "Nov",
     "value": 67
   },
   {
     "name": "Dec",
     "value": 20
   }
 ];
  constructor() { }

  ngOnInit() {
  }

}
