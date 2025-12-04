import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    subtitle: {
      type: String,
      trim: true,
    },

    publishedDate: {
      type: Date,
      default: Date.now,
    },

    coverImage: {
      type: String, 
      required: true,
    },

    tags: [
      {
        type: String,
        trim: true,
      },
    ],

    introduction: {
      type: String,
      required: true,
    },

    contentSections: [
      {
        heading: { type: String, trim: true },
        body: { type: String, trim: true },
      },
    ],

    highlightedQuote: {
      quote: { type: String },
      authorName: { type: String },
      authorRole: { type: String },
      authorImage: { type: String }, 
    },

    seo: {
      metaTitle: { type: String },
      metaDescription: { type: String },
      keywords: [{ type: String }],
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
