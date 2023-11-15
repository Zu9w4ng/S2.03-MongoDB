db.createCollection('Agent', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Agent',
        required: ['address', 'type'],
        properties: {
          address: {
            bsonType: 'object',
            title: 'Address',
            properties: {
              name: { bsonType: 'string' },
              street: { bsonType: 'string' },
              number: { bsonType: 'int' },
              door: { bsonType: 'string' },
              city: { bsonType: 'string' },
              postal_code: { bsonType: 'string' },
              country: { bsonType: 'string' }
            }
          },
          telf: { bsonType: 'int' },
          type: { bsonType: 'string', enum: ['Type1', 'Type2', 'Type3'] }, // Reemplaza con los tipos reales
          fax: { bsonType: 'int' },
          email: { bsonType: 'string' },
          registration_date: { bsonType: 'string' },
          referenced_by: { bsonType: 'objectId' },
          Transaction: {
            bsonType: 'object',
            title: 'Transaction',
            required: ['Transaction_id', 'glasses_id', 'time'],
            properties: {
              Transaction_id: { bsonType: 'objectId' },
              glasses_id: { bsonType: 'array', items: { bsonType: 'objectId' } },
              time: { bsonType: 'timestamp' }
            }
          }
        }
      }
    }
  });

  db.createCollection('glasses', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'glasses',
        required: ['model', 'grad_left', 'grad_right', 'frame', 'frame_color', 'glass_color', 'price', 'brand'],
        properties: {
          model: { bsonType: 'string' },
          grad_left: { bsonType: 'double' },
          grad_right: { bsonType: 'double' },
          frame: { bsonType: 'string' },
          frame_color: { bsonType: 'string' },
          glass_color: { bsonType: 'string' },
          price: { bsonType: 'double' },
          brand: {
            bsonType: 'object',
            title: 'Brand',
            required: ['name', 'provider_id'],
            properties: {
              name: { bsonType: 'string' },
              provider_id: { bsonType: 'array', items: { bsonType: 'objectId' } }
            }
          }
        }
      }
    }
  });