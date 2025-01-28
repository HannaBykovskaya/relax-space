import hero from "../assets/hero.jpg";
import kitchenImage from "../assets/kitchen.webp";
import bathroomImage from "../assets/bathroom.jpg";
import livingRoomImage from "../assets/living.jpg";

import portfolio1 from "../assets/portfolio1.jpg";
import portfolio2 from "../assets/portfolio2.jpg";
import portfolio3 from "../assets/portfolio3.jpg";
import portfolio4 from "../assets/portfolio4.jpg";
import portfolio5 from "../assets/portfolio5.jpg";
import portfolio6 from "../assets/portfolio6.jpg";

import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";
import user5 from "../assets/user5.jpg";
import user6 from "../assets/user6.jpg";

export const LINKS = [
  {
    name: "услуги",
    link: "#services",
  },
  {
    name: "портфолио",
    link: "#portfolio",
  },
  {
    name: "о нас",
    link: "#about",
  },
  {
    name: "отзывы",
    link: "#reviews",
  },
  {
    name: "контакты",
    link: "#contacts",
  },
];

export const HERO_CONTENT = {
  title: "RelaxSpace",
  subtitle: "Преобразите свое пространство с помощью профессиональных услуг по ремонту",
  image: hero,
};

export const SERVICES_CONTENT = [
  {
    title: "Ремонт кухни",
    description:
      "Превратите свою кухню в современное функциональное пространство с помощью наших услуг по ремонту. Индивидуальный дизайн и самое современное оборудование — мы занимаемся всеми аспектами реконструкции кухни.",
    image: kitchenImage,
    alt: "Kitchen Renovation",
  },
  {
    title: "Ремонт ванной",
    description:
      "Создайте настоящий spa-отдых у себя дома! Мы предлагаем люксовую плитку и инновационные проекты, чтобы вы действительно могли отдохнуть в вашей ванной комнате.",
    image: bathroomImage,
    alt: "Bathroom Renovation",
  },
  {
    title: "Ремонт гостиной",
    description:
      "Обновите свою гостиную с помощью нашего ремонта. Мы предлагаем индивидуальный дизайн, новые варианты напольных покрытий и стильные решения по освещению, чтобы создать теплое и уютное пространство для вашей семьи и гостей.",
    image: livingRoomImage,
    alt: "Living Room Renovation",
  },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    name: "Современный ремонт кухни",
    description:
      "Полная реконструкция традиционной кухни с индивидуальной мебелью, гранитными столешницами и современной бытовой техникой.",
    image: portfolio1,
    link: "#",
  },
  {
    id: 2,
    name: "Роскошный ремонт ванной комнаты",
    description:
      "Превращение устаревшей ванной комнаты в spa-салон с мраморной плиткой, стеклянной душевой кабиной и современной сантехникой.",
    image: portfolio2,
    link: "#",
  },
  {
    id: 3,
    name: "Открытое жилое пространство",
    description:
      "Спроектировали прекрасную гостиную зону на открытом воздухе с беседкой, зоной для барбекю и уютными местами для отдыха.",
    image: portfolio3,
    link: "#",
  },
  {
    id: 4,
    name: "Элегантное обновление гостиной",
    description:
      "Обновили гостиную, установив новый пол, стильное освещение и изготовленные на заказ стеллажи.",
    image: portfolio4,
    link: "#",
  },
  {
    id: 5,
    name: "Переоборудование подвала",
    description:
      "Переоборудовали неиспользуемый подвал в современное многофункциональное пространство, включающее домашний кинотеатр, тренажерный зал и гостевую спальню.",
    image: portfolio5,
    link: "#",
  },
  {
    id: 6,
    name: "Трансформация домашнего офиса",
    description:
      "Создали элегантный и функциональный домашний офис, оптимизировав пространство с помощью эргономичной мебели и современного декора.",
    image: portfolio6,
    link: "#",
  },
];

export const REVIEWS = {
  text: "Послушайте, что говорят наши клиенты о своем опыте работы с RelaxSpace. Мы гордимся своей работой и стремимся предоставлять первоклассные услуги по ремонту домов.",
  reviews: [
    {
      name: "Alice Johnson",
      title: "Владелец дома",
      review:
        "RelaxSpace превратили нашу устаревшую кухню в современный шедевр. Команда была профессиональной, внимательной к нашим условиям и превзошла все ожидания. Мы не могли быть более довольны результатами!",
      image: user1,
    },
    {
      name: "Bob Smith",
      title: "Владелец дома",
      review:
        "Ремонт ванной комнаты прошел быстро и гладко, благодаря RelaxSpace. Они позаботились обо всем: от дизайна до монтирования ванной. Настоятельно рекомендую!",
      image: user2,
    },
    {
      name: "Carla Mendes",
      title: "Владелец дома",
      review:
        "RelaxSpace помогли нам создать идеальное жилое пространство на открытом воздухе. Их креативность и мастерство превратили наш задний двор в прекрасный оазис. Теперь это наше любимое место для отдыха и развлечения гостей.",
      image: user3,
    },
    {
      name: "David Lee",
      title: "Владелец дома",
      review:
        "Ремонт гостиной превзошел наши ожидания. Команда RelaxSpace была квалифицированной и коммуникабельной. Новый дизайн придал нашему дому свежий, современный вид.",
      image: user4,
    },
    {
      name: "Ella Fernandez",
      title: "Владелец дома",
      review:
        "От начала до конца работать с RelaxSpace было одно удовольствие. Они выслушали наше видение и воплотили его в жизнь с экспертным мастерством. Наш домашний офис теперь стал стильным и функциональным пространством.",
      image: user5,
    },
    {
      name: "Frank Wilson",
      title: "Владелец дома",
      review:
        "RelaxSpace проделали потрясающую работу по переоборудованию нашего подвала. Они создали уютное многофункциональное пространство, которое так нравится нашей семье. Команда была профессиональной и выполнила работу вовремя и в рамках бюджета.",
      image: user6,
    },
  ],
};

export const CONTACT_INFO = {
  text: "Есть вопросы или нужна дополнительная информация? Свяжитесь с нами, и мы будем рады вам помочь.",
  phone: {
    label: "Телефон",
    value: "(123) 456-7890",
  },
  email: {
    label: "Email",
    value: "info@RelaxSpace.com",
  },
  address: {
    label: "Адрес",
    value: "1234 Renovation Ave, Suite 100",
  },
};
