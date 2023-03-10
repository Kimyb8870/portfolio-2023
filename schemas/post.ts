import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "string",
      // type: "slug",
      // options: {
      //   source: "title",
      //   maxLength: 96,
      // },
    }),
    defineField({
      name: "developer",
      title: "Developer",
      type: "reference",
      to: { type: "developer" },
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      developer: "developer.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { developer } = selection;
      return { ...selection, subtitle: developer && `by ${developer}` };
    },
  },
});
