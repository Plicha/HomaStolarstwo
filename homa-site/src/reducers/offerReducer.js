const initState = {
    products:[
        {id:1,url:'./images/products/house1.png',title:'Piotrek',type:'house',size:'10x10',
            description:'opis produktu id1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, ex?'},

        {id:2,url:'./images/products/house2.png',title:'Asia',type:'house',size:'20x20',
            description:'opis produktu id2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, ex?'},

        {id:3,url:'./images/products/house3.png',title:'Olek',type:'house',size:'30x30',
            description:'opis produktu id3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, ex?'},

        {id:4,url:'./images/products/house4.png',title:'Kuba',type:'house',size:'40x40',
            description:'opis produktu id4 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, ex?'},

        {id:5,url:'./images/products/house5.png',title:'Marian',type:'house',size:'10x10',
            description:'opis produktu id5 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, ex?'},

        {id:6,url:'./images/products/house6.png',title:'Krzyś',type:'house',size:'20x20',
            description:'opis produktu id6 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, ex?'},

        {id:7,url:'./images/products/table1.png',title:'Becia',type:'table',size:'100x100x100',
            description:'opis produktu id7 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, ex?'},

        {id:8,url:'./images/products/table2.png',title:'Karol',type:'table',size:'150x50x10',
            description:'opis produktu id8 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, ex?' },
    ],
}
const offerReducer = (state = initState)=>{
    return state;
}

export default offerReducer