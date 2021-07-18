const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const BOOK = require("../models/product");
const Category = require("../models/category");
const mongoose = require("mongoose");
const faker = require("faker");
const connectDB = require("./../config/db");
connectDB();

async function seedDB() {
  faker.seed(0);

  //----------------------comic
  const comic_titles = [
    "Justice League of America",
    "Batman",
    "New Avengers",
    "Amazing SpiderMan",
    "The Incridible Huck",
    
  ];
  const comic_imgs = [
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS5xb6yJNuSbZudTLmLZo11ggZH0x3QWYVtvRRcl7R3uSwz1_8X",
    "https://i.pinimg.com/originals/22/76/0a/22760a329107704160672cb89a1e93e2.jpg",
    "https://m.media-amazon.com/images/I/51hl+UYSLAL.jpg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/The_Amazing_Spider-Man_theatrical_poster.jpeg/220px-The_Amazing_Spider-Man_theatrical_poster.jpeg",
    "https://romsforever.co/wp-content/uploads/2021/01/BLUS30152.jpg",
   
  ];

  //--------------------NCERT books
  const ncert_titles = [
    "Chemistry class 12",
    "Physics class 12",
    "Mathematics class 12",
    "Flemingo",
    "Biology class 12",
    "Mathematics class 11",
    "R D Sharma class 12",
    "Chemistry class 11",
    "Physics class 11",
    "Biology class 11",
    "Hornbill",
  ];

  const ncert_imgs = [
    "https://images-na.ssl-images-amazon.com/images/I/91DKzsw46IL.jpg",
    "https://5.imimg.com/data5/AX/RT/MY-10953353/physics-part-1-class-12th-ncert-book-500x500.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/918O3XZAW9L.jpg",
    "https://ncert.nic.in/textbook/pdf/lefl1cc.jpg",
    "https://5.imimg.com/data5/VE/AQ/MY-10953353/biology-class-12-ncert-book-500x500.jpg",
    "https://ncert.nic.in/textbook/pdf/kemh1cc.jpg",
    "https://rukminim1.flixcart.com/image/416/416/j4fwpzk0/regionalbooks/d/g/7/mathematics-vol-1-2-class-12-paperback-2017-by-r-d-sharma-author-original-imaesajvcjuz9aws.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/416/416/k0h12fk0/book/9/4/4/chemistry-part-1-class-xi-original-imafk8p3mmuy372z.jpeg?q=70",
    "https://images-na.ssl-images-amazon.com/images/I/91u5XFlMazL.jpg",
    "https://ncert.nic.in/textbook/pdf/kebo1cc.jpg",
    "https://www.academicbag.com/pub/media/catalog/product/cache/fb485fa95da845c2610da0207332b7c4/n/c/ncert_0122.jpg",
  ];

  //--------------------Kannada Novels
  const kannada_titles = [
    "Ni hinga nodabeda nanna",
    "Himalayan blunder",
    "Mandra",
    "Malegalalli madumagalu",
    "Antima horata",
    "Beladingala bale",
    "Tulasidala",
    "Duddu minus duddu",
  ];

  const kannada_imgs = [
    "https://qph.fs.quoracdn.net/main-qimg-053cb6aa6876f1e626bac330f1156ad6-c",
    "https://i.pinimg.com/474x/db/0f/05/db0f05710f613cc434f4c85fff5ca467.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9LIf-e0Xa8VVMedL8J83F3pnQMFJrYQJRVQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1OXTgmq-d4RU8ViTR1L1gHB7SwNXruI8lA&usqp=CAU",
    "https://rukminim1.flixcart.com/image/612/612/regionalbooks/d/m/e/antima-horaata-original-imad8484uvyfkjg3.jpeg?q=70",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1435297674l/15818002._SY475_.jpg",
    "https://images.librarywala.com/book/medium/X2-075.jpg",
    "http://www.mybookadda.net/wp-content/uploads/2018/04/Duddu-duddu-300x452.jpg",
  ];

  //--------------------English Novels
  const english_titles = [
    "The dark road",
    "The kite runner",
    "The immortals of meluha",
    "The secret of nagas",
    "The oath of vayuputras",
    "I too had a love story",
    "Can love happens twice",
    "The girl on the train",
    "Harry potter",
    "The magic of lost temple",
    "The ocean at the end of lane",
    "The god of small things",
    
  ];
  const english_imgs = [
    "https://img.theculturetrip.com/wp-content/uploads/2017/12/516iralv0bl-_sx331_bo1204203200_.jpg",
    "https://qph.fs.quoracdn.net/main-qimg-196508f7dda8c53c07e4a08c423d8be8.webp",
    "https://images-na.ssl-images-amazon.com/images/I/61fMgBkM3jS.jpg",
    "https://law-all.com/image/cache/catalog/data/Book%20Images/Westland%20Books/2014/9789381626344-800x800.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/91gYIekClsL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/81fxf8EaTgL.jpg",
    "https://5.imimg.com/data5/QP/VE/GLADMIN-64412135/i-too-had-a-love-story-vol-2-500x500.png",
    "https://images.gr-assets.com/books/1490903702l/22557272.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
    "https://www.bookgeeks.in/wp-content/uploads/2018/07/The-Magic-of-the-Lost-Temple-by-Sudha-Murthy.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/513EmERKdxL.jpg",
    "https://images.saymedia-content.com/.image/t_share/MTc2MjcxNjMyMTExOTY5NDUz/famous-indian-novels-top-10-english-novels-of-all-time.jpg",
    
  ];

  //--------------------Medical books

  const medical_titles = [
    "Biochemistry",
    "Anatomy for students",
    "Physiology",
    "Microbiology",
    "Parasitology",
    
  ];
  const medical_imgs = [
    "https://images-na.ssl-images-amazon.com/images/I/91w7ik4aExL.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1178682308l/821821._SX318_.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBv-v-LjV2atWy_n_6YyrQ1xZOCWHFHQMHRg&usqp=CAU",
    "https://microbiologyinfo.com/wp-content/uploads/2015/06/Jawetz-Melnick-Adelbergs-Medical-Microbiology-26th-Edition.jpg",
    "https://parasredkart.com/catalog/baveja.jpg",
    
  ];

  //-----------------------Engineering books
  const engineering_titles = [
    "Higher engineering mathematics",
    "The complete reference C++",
    "Java the complete reference",
    "Programming with C",
    "Basic Python",
    "R graphics",
    "Electrical engineering",
    "Elements of mechanical engineering",
    "Fundamentals of aerodynamics",
  ];
  const engineering_imgs = [
    "https://5.imimg.com/data5/JH/UD/MY-4078569/higher-engineering-mathematics-book-500x500.png",
    "https://images-na.ssl-images-amazon.com/images/I/71rUP3ZW4NL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/61+jPzV1gyL.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/81+vsc3xbQL.jpg",
    "https://files.realpython.com/media/python-basics-book.c2d73fad5510.jpg",
    "https://r-graphics.org/cover.jpg",
    "https://inteng-storage.s3.amazonaws.com/img/iea/V0OyLWZ2wQ/sizes/51exflyfrol-sx384-bo1204203200_resize_md.jpg",
    "https://www.schandpublishing.com/uploads/bookimages/schand-books/9788121931946.jpg",
    "https://inteng-storage.s3.amazonaws.com/images/DECEMBER/sizes/fundamentals-of-aero_resize_md.jpg",
  ];

  //-----------------Biography

  const biography_titles = [
    "The dairy of a young girl",
    "Albert Einstein",
    "Helen Keller",
    "Marie Curie",
    "M K Gandhi",
    "Benjamin Franklin",
    "Wings of fire",
    "Netaji Subhash Chandra Bose",
    "Napoleon",
    "The man who knew infinity",
    
  ];
  const biography_imgs = [
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1560816565i/48855._UX160_.jpg",
    "https://4.imimg.com/data4/BA/PH/MY-25372212/albert-einstein-biography-book-500x500.jpg",
    "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1596547853i/54814833._UY2500_SS2500_.jpg",
    "https://m.media-amazon.com/images/I/51zYXmEQD4L.jpg",
    "https://i.pinimg.com/originals/7c/d0/1f/7cd01ff9ec25fdb9260a9c712528a917.jpg",
    "https://cdn.lifehack.org/wp-content/uploads/2015/04/franklin.jpg",
    "https://rukminim1.flixcart.com/image/612/612/juk4gi80/book/4/6/6/wings-of-fire-original-imaffmk4gx5pxqvf.jpeg?q=70",
    "https://images-na.ssl-images-amazon.com/images/I/81CBtrsyyyL.jpg",
    "https://m.media-amazon.com/images/I/51nXm9Kg5rL.jpg",
    "https://img.theculturetrip.com/450x/smart/wp-content/uploads/2017/12/ramanujan.jpg",
    
  ];

  async function seedProducts(titlesArr, imgsArr, categStr) {
    try {
      const categ = await Category.findOne({ title: categStr });
      for (let i = 0; i < titlesArr.length; i++) {
        let prod = new BOOK({
          bookCode: faker.helpers.replaceSymbolWithNumber("####-##########"),
          title: titlesArr[i],
          imagePath: imgsArr[i],
          description: faker.lorem.paragraph(),
          price: faker.random.number({ min: 50, max: 200 }),
          author: faker.company.companyName(0),
          available: true,
          category: categ._id,
        });
        await prod.save();
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function closeDB() {
    console.log("CLOSING CONNECTION");
    await mongoose.disconnect();
  }

  await seedProducts(comic_titles, comic_imgs, "Comic Books");
  await seedProducts(kannada_titles, kannada_imgs, "Kannada Novels");
  await seedProducts(ncert_titles, ncert_imgs, "NCERT Text Books");
  await seedProducts(english_titles, english_imgs, "English Novels");
  await seedProducts(medical_titles,medical_imgs,"Medical Books");
  await seedProducts(engineering_titles, engineering_imgs, "Engineering Books");
  await seedProducts(biography_titles, biography_imgs, "Biography");

  await closeDB();
}

seedDB();
