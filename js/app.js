const { createApp, defineComponent } = Vue;

const app = Vue.createApp({
  data() {
    return {
      hour: 0,
      minute: 0,
      second: 0,
      newBookTitle: "",
      books: JSON.parse(localStorage.getItem("books")) || [
        {
          title: "سير أعلام النبلاء",
          read: false,
        },
        {
          title: "Discovering Statistics",
          read: false,
        },
        {
          title: "القرآن الكريم - سورة البقرة",
          read: false,
        },
      ],
    };
  },
  methods: {
    toggleRead(book) {
      book.read = !book.read;
    },
    addBook() {
      if (this.newBookTitle.trim() !== "") {
        this.books.push({
          title: this.newBookTitle,
          read: false,
        });
      }

      this.newBookTitle = "";
      this.saveBooks();
    },
    deleteBook(index) {
      if (confirm(`Are you sure to DELETE this book?`)) {
        this.books.splice(index, 1);
        this.saveBooks();
      }
    },
    saveBooks() {
      //To save books in web browser's localStorage
      localStorage.setItem("books", JSON.stringify(this.books));
    },
  },
  computed: {},
  watch: {
    hour: function (v) {
      this.minute = v * 60;
      console.log("Run Hours");
    },
    minute: function (v) {
      this.hour = v / 60;
      this.second = v * 60;
      console.log("Run Minutes");
    },
    second: function (v) {
      this.minute = v / 60;
      console.log("Run Seconds");
    },
    books: {
      handler() {
        this.saveBooks();
      },
      deep: true,
    },
  },
}).mount("#app");

/*
CODE EXPLAINED:

The watch property in Vue allows you to react to changes in the data.
Here, it watches for changes in the books array and calls saveBooks whenever books changes.
The deep: true option ensures that nested changes within the array are also detected.
*/
