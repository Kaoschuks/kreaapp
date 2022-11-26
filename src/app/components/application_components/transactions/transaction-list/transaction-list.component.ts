import { Component, Input, OnInit } from '@angular/core';
import { HalfModalPage } from 'src/app/modals/half-modal/half-modal.page';
import { GlobalsServices } from 'src/app/services/core/globals';

@Component({
  selector: 'transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
})

export class TransactionListComponent implements OnInit {

@Input() limit: number = 5
  @Input() expenses: Array<any> = [
    {
        "id": 82,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 68.05,
        "date_added": "24-Oct-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "SMS NOTIFICATION CHARGE FOR 2022 SE PTEMBER\n15TH-14TH OCTOBER 2022 - NG Ref:\nFT22297RTG9S\\IKT",
        "expense_type": "debit",
        "date_updated": "24-Oct-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 81,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 3.75,
        "date_added": "24-Oct-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "MASTERCARD CARD MAINTENANCE VAT FOR Q4 Ref:\nFT2229765QFN",
        "expense_type": "debit",
        "date_updated": "24-Oct-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 80,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 50.0,
        "date_added": "24-Oct-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "MASTERCARD CARD MAINTENANCE CHARGE FOR Q4\nRef: FT2229749C5D\\KNN",
        "expense_type": "debit",
        "date_updated": "24-Oct-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 79,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 2900.0,
        "date_added": "13-Oct-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS Purchase from CAFE ONE LA LANG Ref:\nFT22286RYNRM",
        "expense_type": "debit",
        "date_updated": "13-Oct-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 78,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 800.0,
        "date_added": "12-Oct-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS Purchase from EVRON FOOD STORE LTD LA LANG\nRef: FT222857GLXT",
        "expense_type": "debit",
        "date_updated": "12-Oct-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 77,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 9700.0,
        "date_added": "11-Oct-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "OneBank Transfer from CHIKELUBA FAV OUR\nCHUKWUEMEKA to NIBSS Ref: FT22284QG742",
        "expense_type": "debit",
        "date_updated": "11-Oct-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 76,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 50.0,
        "date_added": "11-Oct-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "Capitalise Actvity For EMT Levy EMT Levy\nFT22284SWX6G Ref: FT22284B2N1R\\SBN",
        "expense_type": "debit",
        "date_updated": "11-Oct-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 75,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 0.0,
        "date_added": "11-Oct-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "NIP From 00000722101016530857991065 4357 Fidelity\nBank PAYREF:ONB221010 04530707180 SENDER:\nCHIKELUBA FAVOU R CHUKWUEMEKA REMARK: ONB\nTRF F Ref: FT22284SWX6G\\SBN",
        "expense_type": "credit",
        "date_updated": "11-Oct-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 74,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 3000.0,
        "date_added": "06-Oct-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS Purchase from PALMPAY LIMITED LA LANG Ref:\nFT22279Q1T6Z",
        "expense_type": "debit",
        "date_updated": "06-Oct-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 73,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 2900.0,
        "date_added": "04-Oct-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS Purchase from OPAY DIGITAL SERVICES LLA LANG\nRef: FT22277DGVPK",
        "expense_type": "debit",
        "date_updated": "04-Oct-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 72,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 2000.0,
        "date_added": "04-Oct-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "Card transaction T Tithecurency NigL 012251 2TSBOE12\nLANG Ref: FT22277109D4\\SBN",
        "expense_type": "debit",
        "date_updated": "04-Oct-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 71,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 800.0,
        "date_added": "04-Oct-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS Purchase from EVRON FOOD STORE LTD LA LANG\nRef: FT22277D5225",
        "expense_type": "debit",
        "date_updated": "04-Oct-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 70,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 1000.0,
        "date_added": "04-Oct-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "Cash Withdrawal on ZENITH ATM 105710220000001\nATM1_A E LEKKI NG Ref: FT22277LM0J2",
        "expense_type": "debit",
        "date_updated": "04-Oct-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 69,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 2440.0,
        "date_added": "04-Oct-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS Purchase from PRINCE EBEANO SUPERMARKLA\nLANG Ref: FT22277TYKCR",
        "expense_type": "debit",
        "date_updated": "04-Oct-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 68,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 50.0,
        "date_added": "04-Oct-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "Capitalise Actvity For EMT Levy EMT Levy FT222778Y16S\nRef: FT22277JWSNF\\SBN",
        "expense_type": "debit",
        "date_updated": "04-Oct-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 67,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 0.0,
        "date_added": "04-Oct-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "NIP From 00000722100310071287538882 6822 Fidelity\nBank PAYREF:ONB221003 10071205182 SENDER:\nCHIKELUBA FAVOU R CHUKWUEMEKA REMARK: ONB\nTRF F Ref: FT222778Y16S\\SBN",
        "expense_type": "credit",
        "date_updated": "04-Oct-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 66,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 2700.0,
        "date_added": "04-Oct-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS Purchase from CAFE ONE LA LANG Ref:\nFT222774D1WR",
        "expense_type": "debit",
        "date_updated": "04-Oct-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 65,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 300.0,
        "date_added": "04-Oct-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS Purchase from CAFE ONE COFFEE-ATLANTILA\nLANG Ref: FT2227752M15",
        "expense_type": "debit",
        "date_updated": "04-Oct-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 64,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 13.81,
        "date_added": "26-Sep-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "SMS NOTIFICATION CHARGE FOR 2022 AU GUST 15TH\n-14TH SEPTEMBER 2022 - NGN Ref:\nFT22269YYGF4\\UYO",
        "expense_type": "debit",
        "date_updated": "26-Sep-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 63,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 500.0,
        "date_added": "26-Sep-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS Purchase from CAFE ONE LA LANG Ref:\nFT22269K7LRP",
        "expense_type": "debit",
        "date_updated": "26-Sep-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 62,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 3750.0,
        "date_added": "26-Sep-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS Purchase from CAFE ONE COFFEE-ATLANTILA\nLANG Ref: FT22269FLPFK",
        "expense_type": "debit",
        "date_updated": "26-Sep-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 61,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 1.88,
        "date_added": "23-Sep-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "NIPVAT/OneBank Transfer from CHIKEL UBA FAVOUR\nCHUKWUEMEKA to VICTOR SH ITTU(uber) Ref:\nFT22266PR4VK\\SBN",
        "expense_type": "debit",
        "date_updated": "23-Sep-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 60,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 25.0,
        "date_added": "23-Sep-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "NIPFEE/OneBank Transfer from CHIKEL UBA FAVOUR\nCHUKWUEMEKA to VICTOR SH ITTU(uber) Ref:\nFT22266VKXY1",
        "expense_type": "debit",
        "date_updated": "23-Sep-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 59,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 6500.0,
        "date_added": "23-Sep-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "OneBank Transfer from CHIKELUBA FAV OUR\nCHUKWUEMEKA to VICTOR SHITTU(ub er) Ref:\nFT22266L0CY4\\SBN",
        "expense_type": "debit",
        "date_updated": "23-Sep-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 58,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 4450.0,
        "date_added": "23-Sep-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS Purchase from GOLDPLATES FEASTHOUSE LLA\nLANG Ref: FT222664436Y",
        "expense_type": "debit",
        "date_updated": "23-Sep-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 57,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 8800.0,
        "date_added": "23-Sep-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS Purchase from KUDA MICROFINANCE BANK LANG\nNG Ref: FT22266PGNLZ",
        "expense_type": "debit",
        "date_updated": "23-Sep-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 56,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 2000.0,
        "date_added": "23-Sep-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS Purchase from EVRON FOODS STORE LIMI LANG\nNG Ref: FT22266S7P1R",
        "expense_type": "debit",
        "date_updated": "23-Sep-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 55,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 1100.0,
        "date_added": "23-Sep-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS Purchase from RUSSAND PHARMACEUTICAL LA\nLANG Ref: FT222662YR90",
        "expense_type": "debit",
        "date_updated": "23-Sep-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 54,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 1650.0,
        "date_added": "23-Sep-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS Purchase from RUSSAND PHARMACEUTICAL LA\nLANG Ref: FT22266PV45G",
        "expense_type": "debit",
        "date_updated": "23-Sep-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 53,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 0.0,
        "date_added": "22-Sep-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "NIP From 00000722092119530658255649 4525 Fidelity\nBank PAYREF:ONB220921 07530605530 SENDER:\nCHIKELUBA FAVOU R CHUKWUEMEKA REMARK: ONB\nTRF F Ref: FT22265Q322V\\SBN",
        "expense_type": "credit",
        "date_updated": "22-Sep-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 52,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 50.0,
        "date_added": "22-Sep-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "Capitalise Actvity For EMT Levy EMT Levy FT2226510VKF\nRef: FT22265GWNQW\\SBN",
        "expense_type": "debit",
        "date_updated": "22-Sep-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 51,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 0.0,
        "date_added": "22-Sep-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "NIP From 00000722092119483981401895 7036 Fidelity\nBank PAYREF:ONB220921 07483904394 SENDER:\nCHIKELUBA FAVOU R CHUKWUEMEKA REMARK: ONB\nTRF F Ref: FT2226510VKF\\SBN",
        "expense_type": "credit",
        "date_updated": "22-Sep-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 50,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 1000.0,
        "date_added": "21-Sep-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "Cash Withdrawal on STERLING ATM 30 ADETOKUNBO\nADEMOLA LAGOS SWNG Ref: FT222641R40Q",
        "expense_type": "debit",
        "date_updated": "21-Sep-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 49,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 9700.0,
        "date_added": "13-Sep-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "OneBank Transfer from CHIKELUBA FAV OUR\nCHUKWUEMEKA to NIBSS Ref: FT222567QV8N",
        "expense_type": "debit",
        "date_updated": "13-Sep-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 48,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 0.75,
        "date_added": "12-Sep-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "NIPVAT/OneBank Transfer from CHIKEL UBA FAVOUR\nCHUKWUEMEKA to AMBROSE O SEMUDIAMEN\nOMOBHUDE Ref: FT22255H90PT\\SBN",
        "expense_type": "debit",
        "date_updated": "12-Sep-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 47,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 10.0,
        "date_added": "12-Sep-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "NIPFEE/OneBank Transfer from CHIKEL UBA FAVOUR\nCHUKWUEMEKA to AMBROSE O SEMUDIAMEN\nOMOBHUDE Ref: FT22255WGZ7B",
        "expense_type": "debit",
        "date_updated": "12-Sep-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 46,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": null,
        "orderid": null,
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 3000.0,
        "date_added": "12-Sep-2022",
        "source_name": "sterlingbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "OneBank Transfer from CHIKELUBA FAV OUR\nCHUKWUEMEKA to AMBROSE OSEMUDIA MEN\nOMOBHUDE Ref: FT22255FPN9Y\\SBN",
        "expense_type": "debit",
        "date_updated": "12-Sep-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 9,
            "abbrev": "sterlingbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "sterling bank",
            "country": "nigeria",
            "source_type": "bankstatement",
            "expression": {
                "source": [
                    "Sterling Bank",
                    "sterlingbank"
                ],
                "source_name": "sterlingbank",
                "source_type": "bankstatement",
                "refno": [
                    "refno"
                ],
                "walletid": [
                    "walletid"
                ],
                "orderid": [
                    "orderid"
                ],
                "amount": [
                    "Debit",
                    "Credit"
                ],
                "isDebit": [
                    "Debit"
                ],
                "type": [
                    "type"
                ],
                "status": [
                    "status"
                ],
                "category": [
                    "category"
                ],
                "balance": [
                    "Balance"
                ],
                "info": [
                    "info"
                ],
                "summary": [
                    "Narration"
                ],
                "date_added": [
                    "Trans Date"
                ],
                "date_updated": [
                    "Value Date"
                ]
            },
            "date": "2022-10-24 15:14:17.858075"
        }
    },
    {
        "id": 45,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": {
            "id": 2078246971,
            "domain": "test",
            "status": "abandoned",
            "reference": "ref-bee5f823-0807-4ced-8b95-44de7ca346ba",
            "amount": 500.0,
            "message": null,
            "gateway_response": "The transaction was not completed",
            "paid_at": null,
            "created_at": "2022-09-05T13:53:23.000Z",
            "channel": "card",
            "currency": "NGN",
            "ip_address": "107.152.39.124, 172.70.178.190, 172.31.62.52",
            "metadata": "",
            "log": null,
            "fees": null,
            "fees_split": null,
            "authorization": {},
            "customer": {
                "id": 40061755,
                "first_name": "",
                "last_name": "",
                "email": "kaoschuks@hotmail.com",
                "customer_code": "CUS_niq6xd31yntnfs4",
                "phone": "",
                "metadata": null,
                "risk_action": "default",
                "international_format_phone": null
            },
            "plan": null,
            "split": {},
            "order_id": null,
            "paidAt": null,
            "createdAt": "2022-09-05T13:53:23.000Z",
            "requested_amount": 50000,
            "pos_transaction_data": null,
            "source": null,
            "fees_breakdown": null,
            "transaction_date": "2022-09-05T13:53:23.000Z",
            "plan_object": {},
            "subaccount": {}
        },
        "refno": "ref-bee5f823-0807-4ced-8b95-44de7ca346ba",
        "orderid": "a54efbaf-d0b8-45ab-b2c4-16dc84b48270",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 500.0,
        "date_added": "2022-09-05",
        "source_name": "paystack",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "abandoned",
        "summary": "",
        "expense_type": "credit",
        "date_updated": "2022-09-15",
        "category_name": "uncategorized",
        "source": {
            "id": 7,
            "abbrev": "paystack",
            "image": "https://s2-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/685/300/original/LMonStackBlue-1000px_new.jpg?1581072498",
            "name": "paystack",
            "country": "nigeria",
            "source_type": "api",
            "expression": {},
            "date": "2022-10-20 16:35:42.683534"
        }
    },
    {
        "id": 44,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990002619999",
        "orderid": "'99990002619999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 10000.0,
        "date_added": "31-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "CASH WITH\r-609238-Nort",
        "expense_type": "debit",
        "date_updated": "31-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 44,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990002619999",
        "orderid": "'99990002619999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 10000.0,
        "date_added": "31-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "CASH WITH\r-609238-Nort",
        "expense_type": "debit",
        "date_updated": "31-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 43,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990002619999",
        "orderid": "'99990002619999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 35.0,
        "date_added": "31-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "ATM WITHD\r-609238-Nort",
        "expense_type": "debit",
        "date_updated": "31-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 43,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990002619999",
        "orderid": "'99990002619999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 35.0,
        "date_added": "31-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "ATM WITHD\r-609238-Nort",
        "expense_type": "debit",
        "date_updated": "31-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 42,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99991140109999",
        "orderid": "'99991140109999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 9000.0,
        "date_added": "31-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-391797-FU",
        "expense_type": "debit",
        "date_updated": "31-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 42,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99991140109999",
        "orderid": "'99991140109999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 9000.0,
        "date_added": "31-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-391797-FU",
        "expense_type": "debit",
        "date_updated": "31-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 41,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "0NIPT",
        "orderid": "'0NIPT",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 20000.0,
        "date_added": "31-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "TRANSFER\r0000072208\rCHIKELUBA\rFBP|ONB22\rCHUKWUE\rREF:000007",
        "expense_type": "credit",
        "date_updated": "31-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 41,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "0NIPT",
        "orderid": "'0NIPT",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 20000.0,
        "date_added": "31-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "TRANSFER\r0000072208\rCHIKELUBA\rFBP|ONB22\rCHUKWUE\rREF:000007",
        "expense_type": "credit",
        "date_updated": "31-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 40,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99995210849999",
        "orderid": "'99995210849999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 10200.0,
        "date_added": "31-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-825412-OP",
        "expense_type": "debit",
        "date_updated": "31-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 40,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99995210849999",
        "orderid": "'99995210849999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 10200.0,
        "date_added": "31-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-825412-OP",
        "expense_type": "debit",
        "date_updated": "31-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 39,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "00",
        "orderid": "'00",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 11.7,
        "date_added": "31-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "SMS CHAR\r31JUL2022-",
        "expense_type": "debit",
        "date_updated": "31-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 39,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "00",
        "orderid": "'00",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 11.7,
        "date_added": "31-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "SMS CHAR\r31JUL2022-",
        "expense_type": "debit",
        "date_updated": "31-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 38,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "00",
        "orderid": "'00",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 156.0,
        "date_added": "31-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "SMS CHAR\r31JUL2022-",
        "expense_type": "debit",
        "date_updated": "31-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 38,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "00",
        "orderid": "'00",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 156.0,
        "date_added": "31-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "SMS CHAR\r31JUL2022-",
        "expense_type": "debit",
        "date_updated": "31-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 37,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99998097229999",
        "orderid": "'99998097229999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 5500.0,
        "date_added": "30-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "FUNDS TRA\r-610255-2K",
        "expense_type": "debit",
        "date_updated": "30-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 37,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99998097229999",
        "orderid": "'99998097229999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 5500.0,
        "date_added": "30-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "FUNDS TRA\r-610255-2K",
        "expense_type": "debit",
        "date_updated": "30-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 36,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "0NIPT",
        "orderid": "'0NIPT",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 20000.0,
        "date_added": "30-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "TRANSFER\r0000072208\rCHIKELUBA\rFBP|ONB22\rCHUKWUE\rREF:000007",
        "expense_type": "credit",
        "date_updated": "30-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 36,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "0NIPT",
        "orderid": "'0NIPT",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 20000.0,
        "date_added": "30-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "TRANSFER\r0000072208\rCHIKELUBA\rFBP|ONB22\rCHUKWUE\rREF:000007",
        "expense_type": "credit",
        "date_updated": "30-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 35,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990075179999",
        "orderid": "'99990075179999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 3750.0,
        "date_added": "22-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-017156-CA",
        "expense_type": "debit",
        "date_updated": "22-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 35,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990075179999",
        "orderid": "'99990075179999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 3750.0,
        "date_added": "22-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-017156-CA",
        "expense_type": "debit",
        "date_updated": "22-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 34,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990308469999",
        "orderid": "'99990308469999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 4980.0,
        "date_added": "22-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-808412-GO",
        "expense_type": "debit",
        "date_updated": "22-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 34,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990308469999",
        "orderid": "'99990308469999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 4980.0,
        "date_added": "22-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-808412-GO",
        "expense_type": "debit",
        "date_updated": "22-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 33,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990118549999",
        "orderid": "'99990118549999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 8250.0,
        "date_added": "19-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-685614-LIL",
        "expense_type": "debit",
        "date_updated": "19-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 33,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990118549999",
        "orderid": "'99990118549999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 8250.0,
        "date_added": "19-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-685614-LIL",
        "expense_type": "debit",
        "date_updated": "19-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 32,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990118509999",
        "orderid": "'99990118509999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 13750.0,
        "date_added": "19-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-597429-LIL",
        "expense_type": "debit",
        "date_updated": "19-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 32,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990118509999",
        "orderid": "'99990118509999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 13750.0,
        "date_added": "19-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-597429-LIL",
        "expense_type": "debit",
        "date_updated": "19-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 31,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99992039389999",
        "orderid": "'99992039389999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 2100.0,
        "date_added": "18-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-994836-EV",
        "expense_type": "debit",
        "date_updated": "18-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 31,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99992039389999",
        "orderid": "'99992039389999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 2100.0,
        "date_added": "18-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-994836-EV",
        "expense_type": "debit",
        "date_updated": "18-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 30,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990086769999",
        "orderid": "'99990086769999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 3200.0,
        "date_added": "18-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-257780-TR",
        "expense_type": "debit",
        "date_updated": "18-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 30,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990086769999",
        "orderid": "'99990086769999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 3200.0,
        "date_added": "18-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-257780-TR",
        "expense_type": "debit",
        "date_updated": "18-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 29,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99991340289999",
        "orderid": "'99991340289999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 1000.0,
        "date_added": "18-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-533524-EV",
        "expense_type": "debit",
        "date_updated": "18-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 29,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99991340289999",
        "orderid": "'99991340289999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 1000.0,
        "date_added": "18-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-533524-EV",
        "expense_type": "debit",
        "date_updated": "18-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 28,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990039189999",
        "orderid": "'99990039189999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 4800.0,
        "date_added": "16-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-910476-PAL",
        "expense_type": "debit",
        "date_updated": "16-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 28,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990039189999",
        "orderid": "'99990039189999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 4800.0,
        "date_added": "16-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-910476-PAL",
        "expense_type": "debit",
        "date_updated": "16-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 27,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "48990000",
        "orderid": "'48990000",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 9000.0,
        "date_added": "16-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-492929-BU",
        "expense_type": "debit",
        "date_updated": "16-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 27,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "48990000",
        "orderid": "'48990000",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 9000.0,
        "date_added": "16-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-492929-BU",
        "expense_type": "debit",
        "date_updated": "16-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 26,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "154030000",
        "orderid": "'154030000",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 13500.0,
        "date_added": "16-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-224039-GR",
        "expense_type": "debit",
        "date_updated": "16-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 26,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "154030000",
        "orderid": "'154030000",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 13500.0,
        "date_added": "16-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-224039-GR",
        "expense_type": "debit",
        "date_updated": "16-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 25,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990039039999",
        "orderid": "'99990039039999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 9825.0,
        "date_added": "16-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-882269-PAL",
        "expense_type": "debit",
        "date_updated": "16-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 25,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990039039999",
        "orderid": "'99990039039999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 9825.0,
        "date_added": "16-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-882269-PAL",
        "expense_type": "debit",
        "date_updated": "16-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 24,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99994623419999",
        "orderid": "'99994623419999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 10200.0,
        "date_added": "16-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "FUNDS TRA\rCHEVRON",
        "expense_type": "debit",
        "date_updated": "16-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 24,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99994623419999",
        "orderid": "'99994623419999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 10200.0,
        "date_added": "16-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "FUNDS TRA\rCHEVRON",
        "expense_type": "debit",
        "date_updated": "16-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 23,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99991426109999",
        "orderid": "'99991426109999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 1300.0,
        "date_added": "16-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-413706-EV",
        "expense_type": "debit",
        "date_updated": "16-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 23,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99991426109999",
        "orderid": "'99991426109999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 1300.0,
        "date_added": "16-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-413706-EV",
        "expense_type": "debit",
        "date_updated": "16-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 22,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990219089999",
        "orderid": "'99990219089999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 30000.0,
        "date_added": "16-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-395603-LIM",
        "expense_type": "debit",
        "date_updated": "16-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 22,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990219089999",
        "orderid": "'99990219089999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 30000.0,
        "date_added": "16-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-395603-LIM",
        "expense_type": "debit",
        "date_updated": "16-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 21,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "0",
        "orderid": "'0",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 50.0,
        "date_added": "15-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "STAMP DUT\rCHARGE - 1",
        "expense_type": "debit",
        "date_updated": "15-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 21,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "0",
        "orderid": "'0",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 50.0,
        "date_added": "15-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "STAMP DUT\rCHARGE - 1",
        "expense_type": "debit",
        "date_updated": "15-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 20,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "0NIPT",
        "orderid": "'0NIPT",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 100000.0,
        "date_added": "15-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "TRANSFER\r0000072208\rCHIKELUBA\rFBP|ONB22\rCHUKWUE\rREF:000007",
        "expense_type": "credit",
        "date_updated": "15-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 20,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "0NIPT",
        "orderid": "'0NIPT",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 100000.0,
        "date_added": "15-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "TRANSFER\r0000072208\rCHIKELUBA\rFBP|ONB22\rCHUKWUE\rREF:000007",
        "expense_type": "credit",
        "date_updated": "15-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 19,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99999533389999",
        "orderid": "'99999533389999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 750.0,
        "date_added": "15-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-343943-EV",
        "expense_type": "debit",
        "date_updated": "15-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 19,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99999533389999",
        "orderid": "'99999533389999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 750.0,
        "date_added": "15-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB P\r-343943-EV",
        "expense_type": "debit",
        "date_updated": "15-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 18,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99994530709999",
        "orderid": "'99994530709999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 1000.0,
        "date_added": "14-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "CASH WITH\r-494182-105",
        "expense_type": "debit",
        "date_updated": "14-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 18,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99994530709999",
        "orderid": "'99994530709999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 1000.0,
        "date_added": "14-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "CASH WITH\r-494182-105",
        "expense_type": "debit",
        "date_updated": "14-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 17,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99997340929999",
        "orderid": "'99997340929999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 54000.0,
        "date_added": "13-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB PURCHASE TRANSACTION  -734092-\r-607048-NULL                   LA             NG",
        "expense_type": "debit",
        "date_updated": "13-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 17,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99997340929999",
        "orderid": "'99997340929999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 54000.0,
        "date_added": "13-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB PURCHASE TRANSACTION  -734092-\r-607048-NULL                   LA             NG",
        "expense_type": "debit",
        "date_updated": "13-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 16,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990000209999",
        "orderid": "'99990000209999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 152500.0,
        "date_added": "13-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB PURCHASE TRANSACTION  -000020-\r-574461-PICCOLO MONDO LIMITED  LA           LANG",
        "expense_type": "debit",
        "date_updated": "13-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 16,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990000209999",
        "orderid": "'99990000209999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 152500.0,
        "date_added": "13-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB PURCHASE TRANSACTION  -000020-\r-574461-PICCOLO MONDO LIMITED  LA           LANG",
        "expense_type": "debit",
        "date_updated": "13-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 15,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99999984059999",
        "orderid": "'99999984059999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 25000.0,
        "date_added": "12-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB PURCHASE TRANSACTION  -998405-\r-397982-Palazzo Hotels LTD     A           L  NG",
        "expense_type": "debit",
        "date_updated": "12-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 15,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99999984059999",
        "orderid": "'99999984059999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 25000.0,
        "date_added": "12-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB PURCHASE TRANSACTION  -998405-\r-397982-Palazzo Hotels LTD     A           L  NG",
        "expense_type": "debit",
        "date_updated": "12-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 14,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "0",
        "orderid": "'0",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 50.0,
        "date_added": "11-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "STAMP DUTY CHARGE 11082022 STAMP DUTY\rCHARGE - 11/08/2022",
        "expense_type": "debit",
        "date_updated": "11-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 14,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "0",
        "orderid": "'0",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 50.0,
        "date_added": "11-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "STAMP DUTY CHARGE 11082022 STAMP DUTY\rCHARGE - 11/08/2022",
        "expense_type": "debit",
        "date_updated": "11-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 13,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "522638752",
        "orderid": "'522638752",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 250000.0,
        "date_added": "11-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "CASH DEPOSIT JAMES UDAMA",
        "expense_type": "credit",
        "date_updated": "11-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 13,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "522638752",
        "orderid": "'522638752",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 250000.0,
        "date_added": "11-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "CASH DEPOSIT JAMES UDAMA",
        "expense_type": "credit",
        "date_updated": "11-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 12,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990168169999",
        "orderid": "'99990168169999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 800.0,
        "date_added": "10-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB PURCHASE TRANSACTION  -016816-\r-259379-EVRON FOODS STORE LIMITLANG           NG",
        "expense_type": "debit",
        "date_updated": "10-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 12,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990168169999",
        "orderid": "'99990168169999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 800.0,
        "date_added": "10-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB PURCHASE TRANSACTION  -016816-\r-259379-EVRON FOODS STORE LIMITLANG           NG",
        "expense_type": "debit",
        "date_updated": "10-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 11,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990031989999",
        "orderid": "'99990031989999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 5100.0,
        "date_added": "03-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB PURCHASE TRANSACTION  -003198-\r-051611-PALMBEACH VIEW HOTEL LTLA           LANG",
        "expense_type": "debit",
        "date_updated": "03-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 11,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990031989999",
        "orderid": "'99990031989999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 5100.0,
        "date_added": "03-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB PURCHASE TRANSACTION  -003198-\r-051611-PALMBEACH VIEW HOTEL LTLA           LANG",
        "expense_type": "debit",
        "date_updated": "03-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 10,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990031939999",
        "orderid": "'99990031939999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 4000.0,
        "date_added": "03-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB PURCHASE TRANSACTION  -003193-\r-017214-PALMBEACH VIEW HOTEL LTLA           LANG",
        "expense_type": "debit",
        "date_updated": "02-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 10,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990031939999",
        "orderid": "'99990031939999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 4000.0,
        "date_added": "03-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB PURCHASE TRANSACTION  -003193-\r-017214-PALMBEACH VIEW HOTEL LTLA           LANG",
        "expense_type": "debit",
        "date_updated": "02-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 9,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "45030000",
        "orderid": "'45030000",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 6000.0,
        "date_added": "02-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB PURCHASE TRANSACTION  -004503-\r-918377-BUTARMILKNG ENT        LA           LANG",
        "expense_type": "debit",
        "date_updated": "02-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 9,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "45030000",
        "orderid": "'45030000",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 6000.0,
        "date_added": "02-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB PURCHASE TRANSACTION  -004503-\r-918377-BUTARMILKNG ENT        LA           LANG",
        "expense_type": "debit",
        "date_updated": "02-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 8,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "8309210000",
        "orderid": "'8309210000",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 5380.0,
        "date_added": "02-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB PURCHASE TRANSACTION  -830921-\r-789496-GOLDPLATES FEASTHOUSE LLA           LANG",
        "expense_type": "debit",
        "date_updated": "02-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 8,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "8309210000",
        "orderid": "'8309210000",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 5380.0,
        "date_added": "02-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB PURCHASE TRANSACTION  -830921-\r-789496-GOLDPLATES FEASTHOUSE LLA           LANG",
        "expense_type": "debit",
        "date_updated": "02-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 7,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "2363180000",
        "orderid": "'2363180000",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 15000.0,
        "date_added": "02-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB PURCHASE TRANSACTION  -236318-\r-751886-ATLANTIC MEGA MART LTD LA           LANG",
        "expense_type": "debit",
        "date_updated": "02-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 7,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "2363180000",
        "orderid": "'2363180000",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 15000.0,
        "date_added": "02-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB PURCHASE TRANSACTION  -236318-\r-751886-ATLANTIC MEGA MART LTD LA           LANG",
        "expense_type": "debit",
        "date_updated": "02-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 6,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99998726189999",
        "orderid": "'99998726189999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 3000.0,
        "date_added": "02-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "CASH WITHDRAWAL FROM OTHER ATM  -872618-\r-610150-105710250000001 ATM3_A E LEKKI        NG",
        "expense_type": "debit",
        "date_updated": "02-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 6,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99998726189999",
        "orderid": "'99998726189999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 3000.0,
        "date_added": "02-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "CASH WITHDRAWAL FROM OTHER ATM  -872618-\r-610150-105710250000001 ATM3_A E LEKKI        NG",
        "expense_type": "debit",
        "date_updated": "02-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 5,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99994291999999",
        "orderid": "'99994291999999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 1000.0,
        "date_added": "02-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "CASH WITHDRAWAL FROM OTHER ATM  -429199-\r-509858-105710250000001 ATM3_A E LEKKI        NG",
        "expense_type": "debit",
        "date_updated": "02-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 5,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99994291999999",
        "orderid": "'99994291999999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 1000.0,
        "date_added": "02-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "CASH WITHDRAWAL FROM OTHER ATM  -429199-\r-509858-105710250000001 ATM3_A E LEKKI        NG",
        "expense_type": "debit",
        "date_updated": "02-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 4,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99991693879999",
        "orderid": "'99991693879999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 1760.0,
        "date_added": "02-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB PURCHASE TRANSACTION  -169387-\r-499012-EVRON FOODS STORE LIMITLANG           NG",
        "expense_type": "debit",
        "date_updated": "02-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 4,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99991693879999",
        "orderid": "'99991693879999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 1760.0,
        "date_added": "02-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB PURCHASE TRANSACTION  -169387-\r-499012-EVRON FOODS STORE LIMITLANG           NG",
        "expense_type": "debit",
        "date_updated": "02-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 3,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99998603709999",
        "orderid": "'99998603709999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 1160.0,
        "date_added": "01-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB PURCHASE TRANSACTION  -860370-\r-717916-EVRON FOODS STORE LIMITLANG           NG",
        "expense_type": "debit",
        "date_updated": "01-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 3,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99998603709999",
        "orderid": "'99998603709999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 1160.0,
        "date_added": "01-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB PURCHASE TRANSACTION  -860370-\r-717916-EVRON FOODS STORE LIMITLANG           NG",
        "expense_type": "debit",
        "date_updated": "01-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 2,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99991396589999",
        "orderid": "'99991396589999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 5300.0,
        "date_added": "01-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB PURCHASE TRANSACTION  -139658-\r-707881-EVRON FOODS STORE LIMITLANG           NG",
        "expense_type": "debit",
        "date_updated": "01-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 2,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99991396589999",
        "orderid": "'99991396589999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 5300.0,
        "date_added": "01-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB PURCHASE TRANSACTION  -139658-\r-707881-EVRON FOODS STORE LIMITLANG           NG",
        "expense_type": "debit",
        "date_updated": "01-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 1,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990789979999",
        "orderid": "'99990789979999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 600.0,
        "date_added": "01-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB PURCHASE TRANSACTION  -078997-\r-304257-EVRON FOODS STORE LIMITLANG           NG",
        "expense_type": "debit",
        "date_updated": "01-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    },
    {
        "id": 1,
        "uid": "517578508f924c12b8e5bb0fea9ebe0b",
        "info": [],
        "refno": "99990789979999",
        "orderid": "'99990789979999",
        "walletid": "walletc4b3393b6dc741689737465311a96f38",
        "amount": 600.0,
        "date_added": "01-Aug-2022",
        "source_name": "gtbank",
        "country": "nigeria",
        "category": {
            "id": 3,
            "summary": "uncaategorized category of expenses made",
            "name": "uncategorized",
            "color": "green",
            "image": "https://image.jpg",
            "category_type": "",
            "date_added": "2022-10-20 16:39:29.168931"
        },
        "status": "pending",
        "summary": "POS/WEB PURCHASE TRANSACTION  -078997-\r-304257-EVRON FOODS STORE LIMITLANG           NG",
        "expense_type": "debit",
        "date_updated": "01-Aug-2022",
        "category_name": "uncategorized",
        "source": {
            "id": 4,
            "abbrev": "gtbank",
            "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Standard_Chartered.svg/250px-Standard_Chartered.svg.png",
            "name": "gurranty trust bank",
            "country": "nigeria",
            "source_type": "sms",
            "expression": {
                "source": [
                    "gt bank",
                    "gtbank",
                    "Gurranty Trust Bank"
                ],
                "source_name": "gtbank",
                "source_for": "sms",
                "transref": [
                    ""
                ],
                "amount": [
                    "CR",
                    "DR"
                ],
                "type": [
                    "CR",
                    "DR"
                ],
                "balance": [
                    "Bal"
                ],
                "desc": [
                    "Desc"
                ],
                "date": [
                    "DT"
                ]
            },
            "date": "2022-10-10 17:32:56.849155"
        }
    }
];

  constructor(
    private globalsServices: GlobalsServices
  ) { }

  ngOnInit() {}

  openmodal(data: any) {
    this.globalsServices.openModal(HalfModalPage, {
      page: 'transactiondetails',
      data: data
    }, 80, false)
  }

}
