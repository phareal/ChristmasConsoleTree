[10,2].forEach(row=>{
    new Array(row).fill('').forEach((v,i)=>{
        console.log([
            ...new Array(9-i).fill('.'),
            ...new Array(1+i*2).fill('^'),
            ...new Array(9-i).fill('.'),
        ].join(''));
    })
})
console.log(".... Merry christmas ....")
