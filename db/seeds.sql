
-- Test Category Table Seeds
db.Category.create({
    businessType: "Restaurant",
    imageURL: "assets/img/testseed1.jpg"
});
db.Category.create({
    businessType: "Non-Profit",
    imageURL: "assets/img/testseed2.jpg"
});
db.Category.create({
    businessType: "Fashion",
    imageURL: "assets/img/testseed3.jpg"
});

-- Test Business Table Seeds
db.Business.create({
    name: "Restaurant Test",
    phone: 1234,
    website: "www.example1.com",
    address: "123 test street",
    twitter: "testtwitter1",
    instagram: "gram1",
    facebook: "face1",
    CategoryId: 1
});
db.Business.create({
    name: "Non-Profit Test",
    phone: 2345,
    website: "www.example2.com",
    address: "223 test street",
    twitter: "testtwitter2",
    instagram: "gram2",
    facebook: "face2",
    CategoryId: 2
});
db.Business.create({
    name: "Fashion Test",
    phone: 3456,
    website: "www.example3.com",
    address: "323 test street",
    twitter: "testtwitter3",
    instagram: "gram3",
    facebook: "face3",
    CategoryId: 3
});