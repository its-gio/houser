CREATE TABLE houses
(
  house_id SERIAL PRIMARY KEY,
  name varchar(50),
  address varchar(100),
  city varchar(50),
  state varchar(20),
  zipcode int,
  img TEXT,
  monthly_mortgage float,
  desired_rent float
)

INSERT INTO houses
  (name, address, city, state, zipcode, img, monthly_mortgage, desired_rent)
VALUES
  ('My House', '1234 Nowhere Lane', 'Los Angeles', 'California', 90042, 'https://i.pinimg.com/originals/67/76/2e/67762ea89a9bc17086da44a1ad81c46e.jpg', 2000, 2200),
  ('In the middle', '1234 Now Here Road', 'Los Angeles', 'California', 90042, 'https://i.ytimg.com/vi/pz_xzSIyELE/hqdefault.jpg', 1200, 2000),
  ('Of the Street', 'Somewhere Road', 'Los Angeles', 'California', 90042, 'https://i.pinimg.com/originals/45/de/58/45de583f78918a16be6a6180f0a5f2a1.jpg', 500, 1000),
  ('Saint Pair', 'Imagination Road', 'Los Angeles', 'California', 90042, 'https://volumebikes.com/bmx/wp-content/uploads/Weird-and-funny-House-28.jpg', 1000, 1500),
  ('Meeps', '3451 Dumbarton Road', 'San Francisco', 'California', 94555, 'https://lh3.googleusercontent.com/proxy/9NHSzm-vvUwybixQmIrhhngRW1ORRsCvIhmM-nAyFN_viUrcVtM8uWvxo4fyMLVDqwDVLZ885lSlSrSndYJoBLXmxXGFdJkCj9Tk6DfxmNYo4rQmYqmidoBh0NUyODukKQ', 50, 2000)


-- CREATE TABLE houses
-- (
--   house_id SERIAL PRIMARY KEY,
--   house JSON
-- )

-- INSERT INTO houses
--   (house)
-- VALUES
--   (
--     '{ "name": "My House", "address": "1234 Nowhere Lane", "city": "Los Angeles", "state": "California", "zipcode": 90042, "img": "https://i.pinimg.com/originals/67/76/2e/67762ea89a9bc17086da44a1ad81c46e.jpg", "monthly_mortgage": 2000, "desired_rent": 2200  }'
--   ),
--   (
--     '{ "name": "In the middle", "address": "1234 Now Here Road", "city": "Los Angeles", "state": "California", "zipcode": 90042, "img": "https://i.ytimg.com/vi/pz_xzSIyELE/hqdefault.jpg", "monthly_mortgage": 1200, "desired_rent": 2000  }'
--   ),
--   (
--     '{ "name": "Of the Street", "address": "Somewhere Road", "city": "Los Angeles", "state": "California", "zipcode": 90042, "img": "https://i.pinimg.com/originals/45/de/58/45de583f78918a16be6a6180f0a5f2a1.jpg", "monthly_mortgage": 500, "desired_rent": 1000  }'
--   ),
--   (
--     '{ "name": "Saint Pair", "address": "Imagination Road", "city": "Los Angeles", "state": "California", "zipcode": 90042, "img": "https://volumebikes.com/bmx/wp-content/uploads/Weird-and-funny-House-28.jpg", "monthly_mortgage": 1000, "desired_rent": 1500  }'
--   ),
--   (
--     '{ "name": "Meeps", "address": "3451 Dumbarton Road", "city": "San Francisco", "state": "California", "zipcode": 94555, "img": "https://lh3.googleusercontent.com/proxy/9NHSzm-vvUwybixQmIrhhngRW1ORRsCvIhmM-nAyFN_viUrcVtM8uWvxo4fyMLVDqwDVLZ885lSlSrSndYJoBLXmxXGFdJkCj9Tk6DfxmNYo4rQmYqmidoBh0NUyODukKQ", "monthly_mortgage": 50, "desired_rent": 2000  }'
--   )



-- {
-- 	"name": "",
-- 	"address": "",
-- 	"city": "",
-- 	"state": "",
-- 	"zipcode": ,
-- 	"img": "",
-- 	"monthly_mortgage": ,
-- 	"desired_rent": 
-- }

-- name,
-- address,
-- city,
-- state,
-- zipcode,
-- image,
-- monthly_mortgage,
-- desired_rent