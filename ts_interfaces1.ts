export class Student {
    rollNo: number;
    name: string;
    grade: string;
    contactNo?: number;
    address: Address;

}

export class Address {
    hNo: number;
    place: string;
    city: string;
    landmark?: string;
    PIN: number;
}

const student: Student = {
    rollNo: 12,
    name: 'Jhon',
    grade: 'XII',
    contactNo: 123456,
    address:  {
        hNo: 1223,
        place: 'Greater Noida',
        city: 'Noida',
        PIN: 3333
    }


}
console.log(student);