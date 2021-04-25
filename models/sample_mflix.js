const { Schema, model } = require('mongoose');

const moviesSchema = new Schema({
  "plot": {
    "type": "String"
  },
  "genres": {
    "type": [
      "String"
    ]
  },
  "runtime": {
    "$numberInt": {
      "type": "Date"
    }
  },
  "cast": {
    "type": [
      "String"
    ]
  },
  "num_mflix_comments": {
    "$numberInt": {
      "type": "Date"
    }
  },
  "title": {
    "type": "String"
  },
  "fullplot": {
    "type": "String"
  },
  "countries": {
    "type": [
      "String"
    ]
  },
  "released": {
    "$date": {
      "$numberLong": {
        "type": "String"
      }
    }
  },
  "directors": {
    "type": [
      "String"
    ]
  },
  "rated": {
    "type": "String"
  },
  "awards": {
    "wins": {
      "$numberInt": {
        "type": "Date"
      }
    },
    "nominations": {
      "$numberInt": {
        "type": "Date"
      }
    },
    "text": {
      "type": "String"
    }
  },
  "lastupdated": {
    "type": "Date"
  },
  "year": {
    "$numberInt": {
      "type": "Date"
    }
  },
  "imdb": {
    "rating": {
      "$numberDouble": {
        "type": "Date"
      }
    },
    "votes": {
      "$numberInt": {
        "type": "Date"
      }
    },
    "id": {
      "$numberInt": {
        "type": "Date"
      }
    }
  },
  "type": {
    "type": "String"
  },
  "tomatoes": {
    "viewer": {
      "rating": {
        "$numberDouble": {
          "type": "String"
        }
      },
      "numReviews": {
        "$numberInt": {
          "type": "Date"
        }
      },
      "meter": {
        "$numberInt": {
          "type": "Date"
        }
      }
    },
    "lastUpdated": {
      "$date": {
        "$numberLong": {
          "type": "String"
        }
      }
    }
  }
});

const Movies = model('movies', moviesSchema);

module.exports = { Movies };