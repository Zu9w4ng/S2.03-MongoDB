db.createCollection('Client', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Client',
        required: ['name', 'surname', 'telf', 'address', 'locality', 'Order'],
        properties: {
          name: { bsonType: 'string' },
          surname: { bsonType: 'string' },
          telf: { bsonType: 'string' },
          address: { bsonType: 'string' },
          locality: { bsonType: 'objectId' },
          Order: {
            bsonType: 'array',
            items: {
              title: 'object',
              required: ['Order_id', 'products', 'time', 'price', 'employees', 'type'],
              properties: {
                Order_id: { bsonType: 'objectId' },
                products: {
                  bsonType: 'array',
                  items: {
                    title: 'object',
                    required: ['product_id', 'quantity'],
                    properties: {
                      product_id: { bsonType: 'objectId' },
                      quantity: { bsonType: 'int' }
                    }
                  }
                },
                time: { bsonType: 'timestamp' },
                price: { bsonType: 'double' },
                employees: {
                  bsonType: 'array',
                  items: {
                    title: 'object',
                    required: ['employee_id'],
                    properties: {
                      employee_id: { bsonType: 'objectId' }
                    }
                  }
                },
                type: { bsonType: 'string', enum: ['Type1', 'Type2', 'Type3'] }, // Reemplaza con los tipos reales
                delivery_time: { bsonType: 'timestamp' }
              }
            }
          }
        }
      }
    }
  });

db.createCollection('Employee', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Employee',
      required: ['name', 'surname', 'nif', 'telf', 'store', 'type'],
      properties: {
        name: { bsonType: 'string' },
        surname: { bsonType: 'string' },
        nif: { bsonType: 'int' },
        telf: { bsonType: 'int' },
        store: {
          bsonType: 'object',
          title: 'Store',
          required: ['store_id', 'name', 'address', 'postal_code', 'locality'],
          properties: {
            store_id: { bsonType: 'string' },
            name: { bsonType: 'string' },
            address: { bsonType: 'array' },
            postal_code: { bsonType: 'string' },
            locality: { bsonType: 'objectId' }
          }
        },
        type: { bsonType: 'string', enum: ['Type1', 'Type2', 'Type3'] } // Reemplaza con los tipos reales
      }
    }
  }
});

db.createCollection('Product', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Product',
        required: ['name', 'description', 'photo', 'price', 'type'],
        properties: {
          name: { bsonType: 'string' },
          description: { bsonType: 'string' },
          photo: { bsonType: 'binData' },
          price: { bsonType: 'double' },
          type: { bsonType: 'string', enum: ['Type1', 'Type2', 'Type3'] }, // Reemplaza con los tipos reales
          pizza_category: {
            bsonType: 'object',
            title: 'PizzaCategory',
            required: ['category_id', 'name'],
            properties: {
              category_id: { bsonType: 'objectId' },
              name: { bsonType: 'string' }
            }
          }
        }
      }
    }
  });

  db.createCollection('Locality', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Locality',
        required: ['name', 'province'],
        properties: {
          name: { bsonType: 'string' },
          province: {
            bsonType: 'object',
            title: 'Province',
            required: ['province_id', 'name'],
            properties: {
              province_id: { bsonType: 'objectId' },
              name: { bsonType: 'string' }
            }
          }
        }
      }
    }
  });