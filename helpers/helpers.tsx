import {FirstLevelMenuItem} from "../interfaces/interface.menu";
import CoursesIcon from "../layout/Menu/icons/courses.svg";
import {TopLevelCategory} from "../interfaces/interface.toppage";
import ServicesIcon from "../layout/Menu/icons/services.svg";
import BooksIcon from "../layout/Menu/icons/books.svg";
import GoodsIcon from "../layout/Menu/icons/goods.svg";
import React from "react";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses},
    { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services},
    { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books},
    { route: 'products', name: 'Товары', icon: <GoodsIcon />, id: TopLevelCategory.Products},
];
