import express from 'express';
import mongoose from 'mongoose';

const DB_URL = `mongodb+srv://asadad:5t3rp197@cluster0.9xigt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const GetData = async () => {
  await mongoose.connect(DB_URL);
};

export default GetData;
