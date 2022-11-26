import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss'],
})
export class TransactionDetailsComponent implements OnInit {

  public transactions: Array<any> = [
    {
      title: 'Transfer from Kreador Tech',
      description: 'Salary - Credit Transaction',
      icon: 'swap-vertical-outline',
      iconBgColor: 'bg-success-overlay',
      sign: 'plus',
      spent: '$1,650',
      percentage: '',
      time: 'today',
      type: 'Transfer',
      status: 'processed'
    },
   ]

  constructor() { }

  ngOnInit() {}

}
