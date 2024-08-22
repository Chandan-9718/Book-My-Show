const MovieArray = [
    {
        movieId: 1,
        poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/uunchai-et00335262-1665386678.jpg",
        likes: 12,
        rating: 3.4,
        title: "UUNCHAI",
        language: "Hindi",
        format: "adventure/Drama/Family",
        
        releaseDate: "12-08-2022",
        length: 123,
        ageRating: 18,
        description: "Three friends take a trek to the Everest Base Camp which becomes a personal, emotional and spiritual journey while battling their physical limitations and discovering the true meaning of freedom.",
        trailer: "https://youtu.be/nS5xqazKipA"
      
    },
    {
        movieId: 2,
        poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/rocket-gang-et00136815-1668162428.jpg",
        likes: 21,
        rating: 4.0,
        title: "Rocket Gang",
        language: "Hindi/English",
        format: "Comedy/Fantasy/Horror/Musical",

        releaseDate: "14-08-2022",
        length: 163,
        ageRating: 16,
        description: "Rocket Gang is a roller-coaster ride of friendship, camaraderie, love & dance as the team of 5 children step into the biggest dance competition to accomplish their dream.",
        trailer: "https://youtu.be/kqp2kUkXpCs"
     
    },
    {
        movieId: 3,
        poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/black-panther-wakanda-forever-et00310792-1666006244.jpg",
        likes: 32,
        rating: 4.2,
        title: "Black Panther",
        language: "English/Tamil/Hindi/Telegu",
        format: "Action/Adventure/Drama",

        releaseDate: "12-01-2023",
        length: 103,
        ageRating: 18,
        description: "After the events of Captain America: Civil War, King T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne from factions within his own country.",
        trailer: "https://youtu.be/xjDjIWPwcPU"
    },
    {
        movieId: 4,
        poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/drishyam-2-et00331997-1667547668.jpg",
        likes: 28,
        rating: 3.8,
        title: "Drishayam 2",
        language: "Hindi",
        format: "Drama/Mystery/Thriller",

        releaseDate: "12-02-2023",
        length: 103,
        ageRating: 18,
        description: "7 years after the case related to Vijay Salgaonkar and his family was closed, a series of unexpected events bring a truth to light that threatens to change everything for the Salgaonkars. Can Vijay save his family this time ?.",
        trailer: "https://youtu.be/cxA2y9Tgl7o"
    },
    {
        movieId: 5,
        poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kantara-hindi-et00342025-1665304124.jpg",
        likes: 43,
        rating: 3.0,
        title: "Kantra",
        language: "Hindi",
        format: "Adventure/Drama/Thriller",

        releaseDate: "01-02-2023",
        length: 143,
        ageRating: 16,
        description: "Set in a fictional village of Dakshina Kannada, Kantara is a visual grandeur that brings alive the traditional culture of Kambla and Bhootha Kola. It is believed that Demigods are the guardians and their energies encircle the village. In the story, there is a ripple when a battle of ego swirls along tradition and culture of the land. The soul of the story is on human and nature conflict in which Shiva is the rebellion and works against nature. There are intense conflicts he indulges in. In the end, a much awaiting loop leads to war between the villagers and the evil forces. Will Shiva, the protagonist of the film be able to reinstate peace and harmony in the village perceiving his existence ?",
        trailer: "https://youtu.be/6oKFao0aISA"
    },
    {
        movieId: 6,
        poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/ram-setu-et00300917-1665129549.jpg",
        likes: 24,
        rating: 1.2,
        title: "Ram Setu",
        language: "Hindi/Telugu/Tamil",
        format: "Adventure/Actiona/Thriller",

        releaseDate: "01-10-2022",
        length: 180,
        ageRating: 16,
        description: "An atheist archaeologist turned believer must race against time to prove the true existence of the legendary Ram Setu before evil forces destroy the pillar of India`s heritage. An action adventure with a strong serving of twists and turns, Ram Setu promises to keep the viewer engaged and entertained, making it the perfect festive film to be enjoyed with the entire family in cinemas.",
        trailer: "https://youtu.be/VgGgYOzNWno"
    },
    {
        movieId: 7,
        poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/phone-bhoot-et00318521-1664878703.jpg",
        likes: 33,
        rating: 3.4,
        title: "Phone Bhoot",
        language: "Hindi",
        format: "Comedy/Horror",

        releaseDate: "01-12-2022",
        length: 120,
        ageRating: 16,
        description: "A ghost reaches out to two bumbling ghostbusters for a business idea. However, their plans go downhill as the eerie ghost reveals her plan.",
        trailer: "https://youtu.be/5fTVslrPsL0"
    },
    {
        movieId: 8,
        poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/yashoda-et00323318-1666012787.jpg",
        likes: 12,
        rating: 4.3,
        title: "Yashoda",
        language: "Telugu/Kannada/Hindi",
        format: "Sci-Fi/Thriller",

        releaseDate: "01-02-20223",
        length: 140,
        ageRating: 16,
        description: "An innocent woman `Yashoda` accepts to be a surrogate mother due to her circumstances. She then finds herself trapped in a world of unknown. Amidst a myriad of politicians, doctors, and powerful people, how does she battle her way out? Watch Yashoda to find out.",
        trailer: "https://youtu.be/5yPkCoMu1F4"
    },
    {
        movieId: 9,
        poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/black-adam-et00117411-1665552700.jpg",
        likes: 34,
        rating: 4.7,
        title: "Black adam",
        language: "English/Hindi/Telugu/Tamil",
        format: "Action/Fantasy/Sci-Fi",

        releaseDate: "01-03-20223",
        length: 140,
        ageRating: 16,
        description: "A slave-turned-god, Teth-Adam (Dwayne Johnson) breaks free of his prison and fights to save his homeland from an ancient evil.",
        trailer: "https://youtu.be/xjDjIWPwcPU"
    },
    {
        movieId: 10,
        poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kulche-chole-et00338222-1666010094.jpg",
        likes: 233,
        rating: 2.8,
        title: "Kulche Chole",
        language: "Punjabi",
        format: "Comedy/Drama",

        releaseDate: "08-03-20223",
        length: 135,
        ageRating: 16,
        description: "Kulche Chole revolves around the life of a young, highly qualified but unemployed Engineer living in Amritsar. The job hunt from being his need of the hour soon turns into the knead of the hour and he becomes a street hawker. Will his work affect his personal life?",
        trailer: "https://youtu.be/9ywgBiQq1ts"
    },
    {
        movieId: 11,
        poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/phone-bhoot-et00318521-1664878703.jpg",
        likes: 33,
        rating: 3.4,
        title: "Phone Bhoot",
        language: "Hindi",
        format: "Comedy/Horror",

        releaseDate: "01-12-2022",
        length: 120,
        ageRating: 16,
        description: "A ghost reaches out to two bumbling ghostbusters for a business idea. However, their plans go downhill as the eerie ghost reveals her plan.",
        trailer: "https://youtu.be/5fTVslrPsL0"
    },
    {
        movieId: 12,
        poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/uunchai-et00335262-1665386678.jpg",
        likes: 12,
        rating: 3.4,
        title: "UUNCHAI",
        language: "Hindi",
        format: "adventure/Drama/Family",

        releaseDate: "12-08-2022",
        length: 123,
        ageRating: 18,
        description: "Three friends take a trek to the Everest Base Camp which becomes a personal, emotional and spiritual journey while battling their physical limitations and discovering the true meaning of freedom.",
        trailer: "https://youtu.be/nS5xqazKipA"
    },
    {
        movieId: 13,
        poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kantara-hindi-et00342025-1665304124.jpg",
        likes: 43,
        rating: 3.0,
        title: "Kantra",
        language: "Hindi",
        format: "Adventure/Drama/Thriller",

        releaseDate: "01-02-2023",
        length: 143,
        ageRating: 16,
        description: "Set in a fictional village of Dakshina Kannada, Kantara is a visual grandeur that brings alive the traditional culture of Kambla and Bhootha Kola. It is believed that Demigods are the guardians and their energies encircle the village. In the story, there is a ripple when a battle of ego swirls along tradition and culture of the land. The soul of the story is on human and nature conflict in which Shiva is the rebellion and works against nature. There are intense conflicts he indulges in. In the end, a much awaiting loop leads to war between the villagers and the evil forces. Will Shiva, the protagonist of the film be able to reinstate peace and harmony in the village perceiving his existence ?",
        trailer: "https://youtu.be/6oKFao0aISA"
    },
    {
        movieId: 14,
        poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/yashoda-et00323318-1666012787.jpg",
        likes: 12,
        rating: 4.3,
        title: "Yashoda",
        language: "Telugu/Kannada/Hindi",
        format: "Sci-Fi/Thriller",

        releaseDate: "01-02-20223",
        length: 140,
        ageRating: 16,
        description: "An innocent woman `Yashoda` accepts to be a surrogate mother due to her circumstances. She then finds herself trapped in a world of unknown. Amidst a myriad of politicians, doctors, and powerful people, how does she battle her way out? Watch Yashoda to find out.",
        trailer: "https://youtu.be/5yPkCoMu1F4"
    },
    {
        movieId: 15,
        poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kantara-hindi-et00342025-1665304124.jpg",
        likes: 43,
        rating: 3.0,
        title: "Kantra",
        language: "Hindi",
        format: "Adventure/Drama/Thriller",

        releaseDate: "01-02-2023",
        length: 143,
        ageRating: 16,
        description: "Set in a fictional village of Dakshina Kannada, Kantara is a visual grandeur that brings alive the traditional culture of Kambla and Bhootha Kola. It is believed that Demigods are the guardians and their energies encircle the village. In the story, there is a ripple when a battle of ego swirls along tradition and culture of the land. The soul of the story is on human and nature conflict in which Shiva is the rebellion and works against nature. There are intense conflicts he indulges in. In the end, a much awaiting loop leads to war between the villagers and the evil forces. Will Shiva, the protagonist of the film be able to reinstate peace and harmony in the village perceiving his existence ?",
        trailer: "https://youtu.be/6oKFao0aISA"
    },
]



export default MovieArray;