const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // 고유한 ID
  name: { type: String, required: true }, // 여행지 이름
  address: { type: String, required: true }, // 여행지 주소
  location: {
    latitude: { type: Number, required: true }, // 위도
    longitude: { type: Number, required: true }, // 경도
  },
  tell: { type: String, required: false }, // 전화번호
  keywords: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Keyword", required: false },
  ], // 키워드 참조
  review: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Review", required: false },
  ], // 리뷰 참조
});

module.exports = mongoose.model("Location", LocationSchema);
