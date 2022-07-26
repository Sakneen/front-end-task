const imagesLink=[
   "https://cdn.pixabay.com/photo/2013/09/24/11/06/house-185714__340.jpg",
   "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__340.jpg",
   "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
   "https://media.istockphoto.com/photos/modern-residential-buildings-picture-id1225226886?k=20&m=1225226886&s=612x612&w=0&h=7rF48nIZCssb48iArI2L2VaYOWhMWemFcg52NzngXwM=",
   "https://media.istockphoto.com/photos/modern-scandinavian-living-room-interior-3d-render-picture-id1184204517",
   "https://cdn.pixabay.com/photo/2017/03/19/01/18/living-room-2155353__340.jpg",
   "https://cdn.pixabay.com/photo/2016/08/27/17/43/florida-1624651__340.jpg",
   "https://cdn.pixabay.com/photo/2016/04/08/15/58/homes-for-sale-hoboken-nj-1316365__340.jpg",
   "https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955086__340.jpg",
   "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"
];










const places=[
    {id:45785 , type:"Duplex" , price:4.52 , 
     area:"125" , sale:false , 
     images:[
      "https://cdn.pixabay.com/photo/2013/09/24/11/06/house-185714__340.jpg",
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__340.jpg",
      "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
    ]
   },
    {id:53145 , type:"Twonhouse" , price:2 , 
     area:"80" , sale:true , 
     images:[
      "https://cdn.pixabay.com/photo/2016/04/08/15/58/homes-for-sale-hoboken-nj-1316365__340.jpg",
      "https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955086__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"]
    },
    {id:18549 , type:"villa" , price:3.5 , 
     area:"130" , sale:false , 
     images:[
      "https://media.istockphoto.com/photos/modern-residential-buildings-picture-id1225226886?k=20&m=1225226886&s=612x612&w=0&h=7rF48nIZCssb48iArI2L2VaYOWhMWemFcg52NzngXwM=",
      "https://media.istockphoto.com/photos/modern-scandinavian-living-room-interior-3d-render-picture-id1184204517",
      "https://cdn.pixabay.com/photo/2017/03/19/01/18/living-room-2155353__340.jpg", 
   ]
    },
    {id:48903 , type:"Condo" , price:3 , 
     area:"60" , sale:true , 
     images:[
      "https://media.istockphoto.com/photos/modern-scandinavian-living-room-interior-3d-render-picture-id1184204517",
      "https://cdn.pixabay.com/photo/2017/03/19/01/18/living-room-2155353__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"
   ]
    },
    {id:94324 , type:"Apartment" , price:5 , 
     area:"215" , sale:true , 
     images:[
      "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
      "https://cdn.pixabay.com/photo/2017/03/19/01/18/living-room-2155353__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"
   ]
    },
    {id:12112 , type:"Duplex" , price:1.5 , 
     area:"115" , sale:false , 
     images:[
      "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
      "https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955086__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"
   ]
   },
    {id:48398 , type:"Twonhouse" , price:6.2 , 
     area:"155" , sale:false , 
     images:[
      "https://cdn.pixabay.com/photo/2016/04/08/15/58/homes-for-sale-hoboken-nj-1316365__340.jpg",
      "https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955086__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"]
    },
    {id:86738 , type:"House" , price:2.5 , 
     area:"90" , sale:true , 
     images:[
      "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
      "https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955086__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"
   ]
    },
    {id:92738 , type:"Condo" , price:1.9 , 
     area:"60" , sale:true , 
     images:[
      "https://cdn.pixabay.com/photo/2013/09/24/11/06/house-185714__340.jpg",
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__340.jpg",
      "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
    ]
    },
    {id:33837 , type:"Condo" , price:2 , 
     area:"100" , sale:false , 
     images:[
      "https://media.istockphoto.com/photos/modern-residential-buildings-picture-id1225226886?k=20&m=1225226886&s=612x612&w=0&h=7rF48nIZCssb48iArI2L2VaYOWhMWemFcg52NzngXwM=",
      "https://media.istockphoto.com/photos/modern-scandinavian-living-room-interior-3d-render-picture-id1184204517",
      "https://cdn.pixabay.com/photo/2017/03/19/01/18/living-room-2155353__340.jpg", 
   ]
    },
    {id:11512 , type:"Duplex" , price:4.2 , 
     area:"135" , sale:false , 
     images:[
      "https://media.istockphoto.com/photos/modern-scandinavian-living-room-interior-3d-render-picture-id1184204517",
      "https://cdn.pixabay.com/photo/2017/03/19/01/18/living-room-2155353__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"
   ]},
    {id:42398 , type:"Twonhouse" , price:6.2 , 
     area:"143" , sale:false , 
     images:[
      "https://cdn.pixabay.com/photo/2013/09/24/11/06/house-185714__340.jpg",
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__340.jpg",
      "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
    ]
    },
    {id:93738 , type:"House" , price:2.54 , 
     area:"90" , sale:true , 
     images:[
      "https://media.istockphoto.com/photos/modern-residential-buildings-picture-id1225226886?k=20&m=1225226886&s=612x612&w=0&h=7rF48nIZCssb48iArI2L2VaYOWhMWemFcg52NzngXwM=",
      "https://media.istockphoto.com/photos/modern-scandinavian-living-room-interior-3d-render-picture-id1184204517",
      "https://cdn.pixabay.com/photo/2017/03/19/01/18/living-room-2155353__340.jpg",
     ]
    },
    {id:14738 , type:"Condo" , price:1.9 , 
     area:"75" , sale:true , 
     images:[
      "https://media.istockphoto.com/photos/modern-residential-buildings-picture-id1225226886?k=20&m=1225226886&s=612x612&w=0&h=7rF48nIZCssb48iArI2L2VaYOWhMWemFcg52NzngXwM=",
      "https://media.istockphoto.com/photos/modern-scandinavian-living-room-interior-3d-render-picture-id1184204517",
      "https://cdn.pixabay.com/photo/2017/03/19/01/18/living-room-2155353__340.jpg",
     ]
    },
    {id:45837 , type:"villa" , price:8.1 , 
     area:"198" , sale:false , 
     images:[
      "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
      "https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955086__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"
   ]
    },{id:15785 , type:"Duplex" , price:5.4 , 
    area:"114" , sale:false , 
    images:[
      "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
      "https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955086__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"
   ]},
   {id:83145 , type:"Twonhouse" , price:2.9 , 
    area:"88" , sale:true , 
    images:[
      "https://media.istockphoto.com/photos/modern-residential-buildings-picture-id1225226886?k=20&m=1225226886&s=612x612&w=0&h=7rF48nIZCssb48iArI2L2VaYOWhMWemFcg52NzngXwM=",
      "https://media.istockphoto.com/photos/modern-scandinavian-living-room-interior-3d-render-picture-id1184204517",
      "https://cdn.pixabay.com/photo/2017/03/19/01/18/living-room-2155353__340.jpg", 
   ]
   },
   {id:38549 , type:"villa" , price:3.5 , 
    area:"130" , sale:false , 
    images:[
      "https://cdn.pixabay.com/photo/2016/04/08/15/58/homes-for-sale-hoboken-nj-1316365__340.jpg",
      "https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955086__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"]
   },
   {id:42903 , type:"Condo" , price:1.7 , 
    area:"80" , sale:true , 
    images:[
      "https://media.istockphoto.com/photos/modern-residential-buildings-picture-id1225226886?k=20&m=1225226886&s=612x612&w=0&h=7rF48nIZCssb48iArI2L2VaYOWhMWemFcg52NzngXwM=",
      "https://media.istockphoto.com/photos/modern-scandinavian-living-room-interior-3d-render-picture-id1184204517",
      "https://cdn.pixabay.com/photo/2017/03/19/01/18/living-room-2155353__340.jpg",
     ]
   },
   {id:34324 , type:"Apartment" , price:5.3 , 
    area:"215" , sale:true , 
    images:[
      "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
      "https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955086__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"
   ]
   },
   {id:62112 , type:"Duplex" , price:1.53 , 
    area:"125" , sale:false , 
    images:[
      "https://cdn.pixabay.com/photo/2013/09/24/11/06/house-185714__340.jpg",
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__340.jpg",
      "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
    ]},
   {id:46598 , type:"Twonhouse" , price:6.15 , 
    area:"145" , sale:false , 
    images:[
      "https://cdn.pixabay.com/photo/2016/04/08/15/58/homes-for-sale-hoboken-nj-1316365__340.jpg",
      "https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955086__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"]
   },
   {id:76738 , type:"House" , price:2.23 , 
    area:"90" , sale:true , 
    images:[
      "https://cdn.pixabay.com/photo/2013/09/24/11/06/house-185714__340.jpg",
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__340.jpg",
      "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
    ]
   },
   {id:92538 , type:"Condo" , price:1.8 , 
    area:"160" , sale:true , 
    images:[
      "https://media.istockphoto.com/photos/modern-scandinavian-living-room-interior-3d-render-picture-id1184204517",
      "https://cdn.pixabay.com/photo/2017/03/19/01/18/living-room-2155353__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"
   ]
   },
   {id:58837 , type:"villa" , price:2.6 , 
    area:"200" , sale:false , 
    images:[
      "https://cdn.pixabay.com/photo/2016/04/08/15/58/homes-for-sale-hoboken-nj-1316365__340.jpg",
      "https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955086__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"]
   },
   {id:11112 , type:"Villa" , price:1.5 , 
    area:"125" , sale:false , 
    images:[
      "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
      "https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955086__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"
   ]},
   {id:31398 , type:"Twonhouse" , price:8.2 , 
    area:"185" , sale:false , 
    images:[
      "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
      "https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955086__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"
   ]
   },
   {id:43738 , type:"House" , price:2.8 , 
    area:"87" , sale:true , 
    images:[
      "https://cdn.pixabay.com/photo/2016/04/08/15/58/homes-for-sale-hoboken-nj-1316365__340.jpg",
      "https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955086__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"]
   },
   {id:14728 , type:"Condo" , price:6.74 , 
    area:"602" , sale:true , 
    images:[
      "https://media.istockphoto.com/photos/modern-residential-buildings-picture-id1225226886?k=20&m=1225226886&s=612x612&w=0&h=7rF48nIZCssb48iArI2L2VaYOWhMWemFcg52NzngXwM=",
      "https://media.istockphoto.com/photos/modern-scandinavian-living-room-interior-3d-render-picture-id1184204517",
      "https://cdn.pixabay.com/photo/2017/03/19/01/18/living-room-2155353__340.jpg", 
   ]
   },
   {id:95837 , type:"Condo" , price:2.3 , 
    area:"200" , sale:false , 
    images:[
      "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
      "https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955086__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"
   ]
   },{id:25785 , type:"Duplex" , price:4.58 , 
   area:"138" , sale:false , 
   images:[
      "https://media.istockphoto.com/photos/modern-scandinavian-living-room-interior-3d-render-picture-id1184204517",
      "https://cdn.pixabay.com/photo/2017/03/19/01/18/living-room-2155353__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"
   ]},
  {id:23145 , type:"Twonhouse" , price:4.43 , 
   area:"80" , sale:true , 
   images:[
      "https://cdn.pixabay.com/photo/2013/09/24/11/06/house-185714__340.jpg",
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__340.jpg",
      "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
    ]
  },
  {id:28549 , type:"villa" , price:3.5 , 
   area:"130" , sale:false , 
   images:[
      "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
      "https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955086__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"
   ]
  },
  {id:46803 , type:"Condo" , price:1.2 , 
   area:"60" , sale:true , 
   images:[
      "https://cdn.pixabay.com/photo/2016/04/08/15/58/homes-for-sale-hoboken-nj-1316365__340.jpg",
      "https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955086__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"]
  },
  {id:54324 , type:"Apartment" , price:5.32 , 
   area:"215" , sale:true , 
   images:[
      "https://media.istockphoto.com/photos/modern-residential-buildings-picture-id1225226886?k=20&m=1225226886&s=612x612&w=0&h=7rF48nIZCssb48iArI2L2VaYOWhMWemFcg52NzngXwM=",
      "https://media.istockphoto.com/photos/modern-scandinavian-living-room-interior-3d-render-picture-id1184204517",
      "https://cdn.pixabay.com/photo/2017/03/19/01/18/living-room-2155353__340.jpg", 
   ]
  },
  {id:32112 , type:"Duplex" , price:1.4 , 
   area:"80" , sale:false , 
   images:[
      "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
      "https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955086__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"
   ]},
  {id:92112 , type:"Duplex" , price:8.3, 
   area:"70" , sale:false , 
   images:[
      "https://media.istockphoto.com/photos/modern-scandinavian-living-room-interior-3d-render-picture-id1184204517",
      "https://cdn.pixabay.com/photo/2017/03/19/01/18/living-room-2155353__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"
   ]},
  {id:78398 , type:"Twonhouse" , price:6.23 , 
   area:"210" , sale:false , 
   images:[
      "https://media.istockphoto.com/photos/modern-residential-buildings-picture-id1225226886?k=20&m=1225226886&s=612x612&w=0&h=7rF48nIZCssb48iArI2L2VaYOWhMWemFcg52NzngXwM=",
      "https://media.istockphoto.com/photos/modern-scandinavian-living-room-interior-3d-render-picture-id1184204517",
      "https://cdn.pixabay.com/photo/2017/03/19/01/18/living-room-2155353__340.jpg", 
   ]
  },
  {id:86738 , type:"House" , price:2.5 , 
   area:"90" , sale:true , 
   images:[
      "https://cdn.pixabay.com/photo/2013/09/24/11/06/house-185714__340.jpg",
      "https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923__340.jpg",
      "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
    ]
  },
  {id:32738 , type:"Condo" , price:1.44 , 
   area:"75" , sale:true , 
   images:[
      "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
      "https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955086__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"
   ]
  },
  {id:82738 , type:"Condo" , price:6.32 , 
   area:"60" , sale:true , 
   images:[
      "https://media.istockphoto.com/photos/modern-scandinavian-living-room-interior-3d-render-picture-id1184204517",
      "https://cdn.pixabay.com/photo/2017/03/19/01/18/living-room-2155353__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"
   ]
  },
  {id:16837 , type:"Condo" , price:3.2 , 
   area:"200" , sale:false , 
   images:[
      "https://cdn.pixabay.com/photo/2016/04/08/15/58/homes-for-sale-hoboken-nj-1316365__340.jpg",
      "https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955086__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"]
  },
  {id:24112 , type:"villa" , price:1.5 , 
   area:"195" , sale:false , 
   images:[
      "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
      "https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955086__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"
   ]},
  {id:84398 , type:"Twonhouse" , price:6.2 , 
   area:"185" , sale:false , 
   images:[
      "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
      "https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955086__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"
   ]
  },
  {id:44738 , type:"House" , price:2.5 , 
   area:"90" , sale:true , 
   images:[
      "https://media.istockphoto.com/photos/modern-scandinavian-living-room-interior-3d-render-picture-id1184204517",
      "https://cdn.pixabay.com/photo/2017/03/19/01/18/living-room-2155353__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"
   ]
  },
  {id:84738 , type:"villa" , price:4.3 , 
   area:"50" , sale:true , 
   images:[
      "https://media.istockphoto.com/photos/modern-residential-buildings-picture-id1225226886?k=20&m=1225226886&s=612x612&w=0&h=7rF48nIZCssb48iArI2L2VaYOWhMWemFcg52NzngXwM=",
      "https://media.istockphoto.com/photos/modern-scandinavian-living-room-interior-3d-render-picture-id1184204517",
      "https://cdn.pixabay.com/photo/2017/03/19/01/18/living-room-2155353__340.jpg", 
   ]
  },
  {id:34738 , type:"House" , price:1.2 , 
   area:"90" , sale:true , 
   images:[
      "https://cdn.pixabay.com/photo/2016/04/08/15/58/homes-for-sale-hoboken-nj-1316365__340.jpg",
      "https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955086__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"]
  },
  {id:85837 , type:"Condo" , price:3.9 , 
   area:"200" , sale:false , 
   images:[
      "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_960_720.jpg",
      "https://cdn.pixabay.com/photo/2020/03/21/20/03/real-estate-4955086__340.jpg",
      "https://cdn.pixabay.com/photo/2015/11/06/11/39/single-family-home-1026368__340.jpg"
   ]
  }
]



export default places;