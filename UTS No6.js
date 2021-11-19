let dataDosen = [
    {
        nama: "Syahid",
        nilai: {
            "Pengampu Dasar Pemrograman": 80,
            "Pengampu Basis Data" : 80,
            "Pengampu PBO" : 60
        }
    },
    {
        nama: "Alun",
        nilai: {
            "Pengampu Dasar Pemrograman": 80,
            "Pengampu Basis Data" : 60,
            "Pengampu PBO" : 78
        }
    },
    {
        nama: "Anggun",
        nilai: {
            "Pengampu Dasar Pemrograman": 80,
            "Pengampu Basis Data" : 80,
            "Pengampu PBO" : 60
            
        }
    },
];

let program = []
let data = []
let matakuliah = []
let text1 = "'Pengampu Dasar Pemrograman :'"
let text2 = "'Pengampu Basis Data :'"
let text3 = "'Pengampu PBO :'"
for (let i=0; i<dataDosen.length; i++){
    let value1 = dataDosen[i].nilai["Pengampu Dasar Pemrograman"];
    let value2 = dataDosen[i].nilai["Pengampu Basis Data"];
    let value3 = dataDosen[i].nilai["Pengampu PBO"];
    
    if (value1 > 70) {
        program.push(dataDosen[i].nama)
    }
    else{
        
    } 
    if (value2 > 70) {
        data.push(dataDosen[i].nama)
    
    }
    else{
    } 
    if (value3 > 70) {
        matakuliah.push(dataDosen[i].nama)
    }
    else{
    }
      
    
}

console.log(text1, program);
console.log(text2, data);
console.log(text3, matakuliah);