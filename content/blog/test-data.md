---
title: Generating fake data for tests in Python
date: 2022-07-08
type: blog
_draft: false
---

Sometimes you start a project from scratch and have no data to help you to test your code. Or you will receive a "gift" of a legacy project that has code signaled as "done" but has no data that really proves this code really works.

We’ve all been there, even you, novice programmer. And every time, we do the same: insert some data manually, a tedious work that is always done using headphones, listening to Walking On Sunshine by Katrina & The Waves (... the irony huh?).

To help you to avoid these problems, I'll show you some techniques I've been using for some time now to generate test data, fake data or whatever you'd like to call it.

## Using the random package

Python comes bundled with a nice package for creating randomness, called `random`, and it can help us to generate some random data based on a existing sample. And, yes, you can build this sample, and have random work with it.

For the first example, we want to generate a list of products and prices. We know some things: the product has a `product_id`, a `category_id` and a `price`. The `product_id` has at least 4 digits, the `category` is a single item from a known list, and the `price` is between a known range, from 0.01 to 100.00. And say we need like 273 itens in this list.

We can generate some data using the code below.

```py
import random

random.seed()

known_categories = ['DRY', 'FRESH', 'LIQUID']    # my data sample
items = [
    {
        "product_id": random.sample(range(1000,9999)),
        "category_id": random.choice(known_categories),
        "price": random.randrange(1,10000) / 100
    }
    for _ in range(273)
]
```

The three used functions from random are:

- `random.sample`, that selects a item from the range. sample assures that there will be no repeated items.
- `random.choice` that select one item from the list
- `random.randrange` that select one item from the range. Given that randrange only returns an integer, we divide the returned number by 100 to have our price.

<br>

> 💡 **Important**: The `random.seed()` initializes the randomizer. If you want to your randomizer always return the same data, pass the same value to this command (eg: `random.seed(42)`). This is specially useful for reproducible tests. If you do not inform nothing, it will use the current system's datetime to generate the seed, and then for each run you will receive aleatory data.

## Using the faker package

For other data formats, specific cases, or other scenarios, we can use the [faker](https://github.com/joke2k/faker) package.

This package can be used to generate data, based some common concepts, like "name" and "address".

To install it, use:

```sh
pip install faker
```

For our second example, we will generate a list of users, with a full name, an address and a phone number.

```py
from faker import Faker

fake = Faker()

user_list = [
    {
        "full_name": "{} {}".format(fake.first_name(),fake.last_name()),
        "address": fake.address(),
        "phone": fake.phone_number(),

    }
    for _ in range(3)
]
```

The code returns:

```py
[
  {
    "address": "3005 Sydney Isle\nCombsmouth, FL 14919",
    "full_name": "Rachel Weaver",
    "phone": "691-992-2752"
  },
  {
    "address": "290 Rich Walk\nQuinntown, MT 05852",
    "full_name": "Elijah Hood",
    "phone": "9308368606"
  },
  {
    "address": "787 Andrea Valley\nWoodfurt, VA 86763",
    "full_name": "Janice Jones",
    "phone": "(889)096-4636x1433"
  }
]
```

If you pass the `localization` parameter when instancing the `Faker` object, it will return data for the specified locale.

For example, if you want data tailored for Germany, you can use:

```py
fake = Faker('de_DE')

# ...
```

You should get something like this:

```py
[
  {
    "address": "Scheelplatz 863\n68737 Pinneberg",
    "full_name": "Tim Jessel",
    "phone": "+49(0)5917 36668"
  },
  {
    "address": "Bertold-Dussen van-Weg 78\n89881 Hohenstein-Ernstthal",
    "full_name": "Sophia Lorch",
    "phone": "(01072) 277426"
  },
  {
    "address": "Herrmannstr. 4/6\n98896 Lübeck",
    "full_name": "Elke Bohlander",
    "phone": "(03509) 08874"
  }
]
```

Localizations have their own localized providers. The full list can be found [here](https://faker.readthedocs.io/en/master/locales.html).

## Final thoughts

Using this two tools, you can generate any data you need to test your code, as long as you know the shape. From this starting point, some options are available:

- you can send this generated data to a database, and regenerate the data for each test. If you set the seed to the same value, you always have the same results, and then is assured that the tests always run with the same test data.

- you write the data to a file and share with users that can validate the test data you're using on your tests.

That's it!

Happy Testing!
