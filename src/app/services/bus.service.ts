import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class BusService {

  private allBusStopLocation = [   
    {
        id: 'psu-bus-station-elephant',
        name: 'โรงช้าง',
        location: {
            latitude: 7.011488,
            longitude: 100.500004
        },
        colors: {
            red: true,
            yellow: true,
            green: true
        }
    },
    {
        id: 'psu-bus-station-la',
        name: 'ศิลปศาสตร์',
        location: {
            latitude: 7.010715,
            longitude: 100.497324
        },
        colors: {
            red: true,
            yellow: true,
            green: true
        }
    },
    {
        id: 'psu-bus-station-history-building',
        name: 'หอประวัติ',
        location: {
            latitude: 7.009960,
            longitude: 100.499409
        },
        colors: {
            red: true,
            yellow: true,
            green: true
        }
    },
    {
        id: 'psu-bus-station-dentist',
        name: 'ทันตแพทย์',
        location: {
            latitude: 7.007549,
            longitude: 100.496127
        },
        colors: {
            red: true,
            yellow: false,
            green: false
        }
    },
    {
        id: 'psu-bus-station-science',
        name: 'คณะวิทยาศาสตร์',
        location: {
            latitude: 7.008524,
            longitude: 100.500093
        },
        colors: {
            red: true,
            yellow: true,
            green: true
        }
    },
    {
        id: 'psu-bus-station-pumpkin',
        name: 'ตึกฟักทอง',
        location: {
            latitude: 7.008770,
            longitude: 100.498601
        },
        colors: {
            red: false,
            yellow: true,
            green: false
        }
    },
    {
        id: 'psu-bus-station-red-building',
        name: 'ตึกแดง',
        location: {
            latitude: 7.006519,
            longitude: 100.496182
        },
        colors: {
            red: true,
            yellow: false,
            green: false
        }
    },
    {
        id: 'psu-bus-station-bsc',
        name: 'BSC',
        location: {
            latitude: 7.006338,
            longitude: 100.499958
        },
        colors: {
            red: true,
            yellow: true,
            green: true
        }
    },
    {
        id: 'psu-bus-station-dinosaur',
        name: 'ตึกไดโนเสาร์',
        location: {
            latitude: 7.008279,
            longitude: 100.497509
        },
        colors: {
            red: false,
            yellow: true,
            green: false
        }
    },
    {
        id: 'psu-bus-station-nurse',
        name: 'หอพักพยาบาล',
        location: {
            latitude: 7.0055644,
            longitude: 100.4964119
        },
        colors: {
            red: true,
            yellow: false,
            green: false
        }
    },
    {
        id: 'psu-bus-station-natres',
        name: 'คณะทรัพยากรฯ',
        location: {
            latitude: 7.005426,
            longitude: 100.500093
        },
        colors: {
            red: true,
            yellow: false,
            green: true
        }
    },
    {
        id: 'psu-bus-station-museum',
        name: 'พิพิธภัณฑ์',
        location: {
            latitude: 7.007520,
            longitude: 100.497062
        },
        colors: {
            red: false,
            yellow: true,
            green: false
        }
    },
    {
        id: 'psu-bus-station-pharmacy',
        name: 'เภสัชศาสตร์',
        location: {
            latitude: 7.0050265,
            longitude: 100.497262
        },
        colors: {
            red: true,
            yellow: false,
            green: true
        }
    },
    {
        id: 'psu-bus-station-agro',
        name: 'คณะอุตสาหกรรมการเกษตร',
        location: {
            latitude: 7.003880,
            longitude: 100.501000
        },
        colors: {
            red: false,
            yellow: false,
            green: true
        }
    },
    {
        id: 'psu-bus-station-sec',
        name: 'ศูนย์เครื่องมือ',
        location: {
            latitude: 7.006544,
            longitude: 100.498122
        },
        colors: {
            red: false,
            yellow: true,
            green: false
        }
    },
    {
        id: 'psu-bus-station-agri-market',
        name: 'ตลาดเกษตร',
        location: {
            latitude: 7.003763,
            longitude: 100.499172
        },
        colors: {
            red: true,
            yellow: false,
            green: true
        }
    },
    {
        id: 'psu-bus-station-vet',
        name: 'สัตวแพทย์',
        location: {
            latitude: 7.002204,
            longitude: 100.501320
        },
        colors: {
            red: false,
            yellow: false,
            green: true
        }
    }];
    

  private queryObservable;

  constructor(private db: AngularFirestore) {
    this.queryObservable = db.collection('all_bus_locations').valueChanges();
  }

  public getData(){
    return this.queryObservable;
  }

  public getBusStopLocation(){
    return this.allBusStopLocation;
  }
  
}
