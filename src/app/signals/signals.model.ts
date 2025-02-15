export interface OpenOrderDataItem {
    OrderNumber: number;
    OrderType: string;
    ReceivedDate?: Date; // Optional property
    CustomerNumber?: string; // Optional property
    Name:string;
    VehicleId?: string; // Optional property
    LicensePlate?: string; // Optional property
    Status?: string; // Optional property
  }
  

export const ELEMENT_DATA =[
        {
          OrderNumber: 10011,
          OrderType: 'Type A',
          ReceivedDate: new Date('2025-01-01'),
          CustomerNumber: 'C123',
          Name: 'John Doe',
          VehicleId: 'V001',
          LicensePlate: 'ABC123',
          Status: 'Pending'
        },
        {
          OrderNumber: 10012,
          OrderType: 'Type B',
          ReceivedDate: new Date('2025-01-02'),
          CustomerNumber: 'C124',
          Name: 'Jane Smith',
          VehicleId: 'V002',
          LicensePlate: 'XYZ456',
          Status: 'Completed'
        },
        {
          OrderNumber: 10001,
          OrderType: 'Type C',
          ReceivedDate: new Date('2025-01-03'),
          CustomerNumber: 'C125',
          Name: 'Alice Johnson',
          VehicleId: 'V003',
          LicensePlate: 'DEF789',
          Status: 'Pending'
        },
        {
          OrderNumber: 10002,
          OrderType: 'Type D',
          ReceivedDate: new Date('2025-01-04'),
          CustomerNumber: 'C126',
          Name: 'Bob Brown',
          VehicleId: 'V004',
          LicensePlate: 'GHI012',
          Status: 'In Progress'
        },
        {
          OrderNumber: 10003,
          OrderType: 'Type E',
          ReceivedDate: new Date('2025-01-05'),
          CustomerNumber: 'C127',
          Name: 'Charlie Davis',
          VehicleId: 'V005',
          LicensePlate: 'JKL345',
          Status: 'Completed'
        },
        {
          OrderNumber: 10004,
          OrderType: 'Type F',
          ReceivedDate: new Date('2025-01-06'),
          CustomerNumber: 'C128',
          Name: 'Diana Evans',
          VehicleId: 'V006',
          LicensePlate: 'MNO678',
          Status: 'Pending'
        },
        {
          OrderNumber: 10005,
          OrderType: 'Type G',
          ReceivedDate: new Date('2025-01-07'),
          CustomerNumber: 'C129',
          Name: 'Evan Foster',
          VehicleId: 'V007',
          LicensePlate: 'PQR901',
          Status: 'In Progress'
        },
        {
          OrderNumber: 10006,
          OrderType: 'Type H',
          ReceivedDate: new Date('2025-01-08'),
          CustomerNumber: 'C130',
          Name: 'Fiona Green',
          VehicleId: 'V008',
          LicensePlate: 'STU234',
          Status: 'Completed'
        },
        {
          OrderNumber: 10007,
          OrderType: 'Type I',
          ReceivedDate: new Date('2025-01-09'),
          CustomerNumber: 'C131',
          Name: 'George Harris',
          VehicleId: 'V009',
          LicensePlate: 'VWX567',
          Status: 'Pending'
        },
        {
          OrderNumber: 10008,
          OrderType: 'Type J',
          ReceivedDate: new Date('2025-01-10'),
          CustomerNumber: 'C132',
          Name: 'Hannah Irving',
          VehicleId: 'V010',
          LicensePlate: 'YZA890',
          Status: 'In Progress'
        },
        {
          OrderNumber: 10009,
          OrderType: 'Type K',
          ReceivedDate: new Date('2025-01-11'),
          CustomerNumber: 'C133',
          Name: 'Ian Jackson',
          VehicleId: 'V011',
          LicensePlate: 'BCD123',
          Status: 'Completed'
        },
        {
          OrderNumber: 10010,
          OrderType: 'Type L',
          ReceivedDate: new Date('2025-01-12'),
          CustomerNumber: 'C134',
          Name: 'Jackie King',
          VehicleId: 'V012',
          LicensePlate: 'EFG456',
          Status: 'Pending'
        }
      ];