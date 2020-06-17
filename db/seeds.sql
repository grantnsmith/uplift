-- Test Business Table Seeds
db.Business.create({
    name: "Restaurant Test",
    city: "Seattle",
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
    city: "Seattle",
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
    city: "Seattle"
    phone: 3456,
    website: "www.example3.com",
    address: "323 test street",
    twitter: "testtwitter3",
    instagram: "gram3",
    facebook: "face3",
    CategoryId: 3
});


-- Category Table Seeds
db.Category.create({
  businessType: "Art Galleries"
})
  .then(
    db.Category.create({
      businessType: "Bakeries"
    })
  )
  .then(
    db.Category.create({
      businessType: "Bars"
    })
  )
  .then(
    db.Category.create({
      businessType: "Beauty & Spa"
    })
  )
  .then(
    db.Category.create({
      businessType: "Cafe"
    })
  )
  .then(
    db.Category.create({
      businessType: "Car Dealerships"
    })
  )
  .then(
    db.Category.create({
      businessType: "Catering"
    })
  )
  .then(
    db.Category.create({
      businessType: "Coffee & Tea"
    })
  )
  .then(
    db.Category.create({
      businessType: "Dessert"
    })
  )
  .then(
    db.Category.create({
      businessType: "Event Venues"
    })
  )
  .then(
    db.Category.create({
      businessType: "Grocery, Markets & Convenience Stores"
    })
  )
  .then(
    db.Category.create({
      businessType: "Gyms & Yoga Studios"
    })
  )
  .then(
    db.Category.create({
      businessType: "Hotel"
    })
  )
  .then(
    db.Category.create({
      businessType: "Music Venues & Dance Clubs"
    })
  )
  .then(
    db.Category.create({
      businessType: "Pet Services"
    })
  )
  .then(
    db.Category.create({
      businessType: "Restaurants"
    })
  )
  .then(
    db.Category.create({
      businessType: "Shopping"
    })
  )
  .then(
    db.Category.create({
      businessType: "Wine, Beer, Spirits"
    })
  )
  .then(
    db.Category.create({
      businessType: "Other"
    })
  );