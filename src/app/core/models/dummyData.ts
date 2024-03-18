import { BlogPost } from "./blog.model";
import { Slide } from "./data.model";

export const dummyBlogs: BlogPost[] = [
    {
        id: 1,
        title: 'Blog Title 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
        author: 'Author 1',
        date: new Date(),
        image: 'https://cdn.pixabay.com/photo/2023/08/05/14/24/twilight-8171206_1280.jpg'
    },
    {
        id: 2,
        title: 'Blog Title 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
        author: 'Author 2',
        date: new Date(),
        image: 'https://media.istockphoto.com/id/915681526/photo/bandra-worli-sea-link-mumbai.jpg?s=1024x1024&w=is&k=20&c=L5ZbPXc0iBCgz7zL6nP-Det8lXCLXeUxxBW8TBNPLVQ='
    },
    {
        id: 3,
        title: 'Blog Title 3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
        author: 'Author 3',
        date: new Date(),
        image: 'https://media.istockphoto.com/id/915681490/photo/bandra-worli-sea-link-mumbai.jpg?s=1024x1024&w=is&k=20&c=owcMzn1YpOHO6JWAKoA2z1P5i3t5zHkqwVKE7inktro='
    },
    {
        id: 4,
        title: 'Blog Title 4',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
        author: 'Author 4',
        date: new Date(),
        image: 'https://media.istockphoto.com/id/915681526/photo/bandra-worli-sea-link-mumbai.jpg?s=1024x1024&w=is&k=20&c=L5ZbPXc0iBCgz7zL6nP-Det8lXCLXeUxxBW8TBNPLVQ='
    }
]

export const slides: Slide[] = [
    {
      img: 'https://cdn.pixabay.com/photo/2023/08/05/14/24/twilight-8171206_1280.jpg',
      heading: 'Project Heading',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.'
    },
    {
      img: 'https://media.istockphoto.com/id/915681526/photo/bandra-worli-sea-link-mumbai.jpg?s=1024x1024&w=is&k=20&c=L5ZbPXc0iBCgz7zL6nP-Det8lXCLXeUxxBW8TBNPLVQ=',
      heading: 'Project Heading',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.'
    },
    {
      img: 'https://media.istockphoto.com/id/915681490/photo/bandra-worli-sea-link-mumbai.jpg?s=1024x1024&w=is&k=20&c=owcMzn1YpOHO6JWAKoA2z1P5i3t5zHkqwVKE7inktro=',
      heading: 'Project Heading',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.'
    }
  ]