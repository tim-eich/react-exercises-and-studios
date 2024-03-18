export default function BookList() {
   let pageTitle = "Reading List";
   let book1 = "https://www.pluggedin.com/wp-content/uploads/2020/01/hitchhikers-guide-to-galaxy-cover-image-1024x1536.jpeg";
   let book2 = "https://i.harperapps.com/hcanz/covers/9780732291501/y648.jpg";
   let book3 = "https://imgv2-2-f.scribdassets.com/img/word_document/163599595/original/f284089a34/1600024134?v=1";

   return (
      <div>
         <h3>{ pageTitle }</h3>
         <img src={ book1 } alt="The Hitchhiker's Guide to the Galaxy" />
         <img src={ book2 } alt="John Dies at the End" />
         <img src={ book3 } alt="Cryptonomicon" />
      </div>      
   );
}