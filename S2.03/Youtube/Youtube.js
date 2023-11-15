db.createCollection('User', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'User',
      required: [
        'email',
        'password',
        'username',
        'birthdate',
        'gender',
        'country',
        'postal_code'
      ],
      properties: {
        email: { bsonType: 'string' },
        password: { bsonType: 'string' },
        username: { bsonType: 'string' },
        birthdate: { bsonType: 'date' },
        gender: { bsonType: 'string', enum: ['Male', 'Female', 'Other'] },
        country: { bsonType: 'string', enum: ['Country1', 'Country2', 'Country3'] },
        postal_code: { bsonType: 'string' },
        channels: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['name', 'description', 'creation_time'],
            properties: {
              name: { bsonType: 'string' },
              description: { bsonType: 'string' },
              creation_time: { bsonType: 'timestamp' }
            }
          }
        },
        videos: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: [
              'video_id',
              'title',
              'description',
              'size',
              'duration',
              'thumbnail',
              'reproductions',
              'upload_time',
              'status'
            ],
            properties: {
              video_id: { bsonType: 'string' },
              title: { bsonType: 'string' },
              description: { bsonType: 'string' },
              size: { bsonType: 'double' },
              duration: { bsonType: 'double' },
              thumbnail: { bsonType: 'binData' },
              reproductions: { bsonType: 'int' },
              upload_time: { bsonType: 'timestamp' },
              status: { bsonType: 'string', enum: ['Active', 'Inactive'] },
              tags: {
                bsonType: 'array',
                items: {
                  title: 'object',
                  required: ['tag_id', 'name'],
                  properties: {
                    tag_id: { bsonType: 'string' },
                    name: { bsonType: 'string' }
                  }
                }
              },
              likes_dislikes: {
                bsonType: 'object',
                title: 'object',
                required: ['likes', 'dislikes', 'users'],
                properties: {
                  likes: { bsonType: 'int' },
                  dislikes: { bsonType: 'int' },
                  users: {
                    bsonType: 'array',
                    items: {
                      title: 'object',
                      required: ['user_id', 'action'],
                      properties: {
                        user_id: { bsonType: 'objectId' },
                        action: { bsonType: 'string', enum: ['Like', 'Dislike'] }
                      }
                    }
                  }
                }
              },
              comments: {
                bsonType: 'array',
                items: {
                  title: 'object',
                  required: ['comment_id', 'author', 'likes_dislikes'],
                  properties: {
                    comment_id: { bsonType: 'objectId' },
                    author: { bsonType: 'objectId' },
                    likes_dislikes: {
                      bsonType: 'object',
                      title: 'object',
                      required: ['likes', 'dislikes'],
                      properties: {
                        users: {
                          bsonType: 'array',
                          items: {
                            title: 'object',
                            required: ['user_id', 'type', 'time'],
                            properties: {
                              user_id: { bsonType: 'objectId' },
                              type: { bsonType: 'string', enum: ['Like', 'Dislike'] },
                              time: { bsonType: 'timestamp' }
                            }
                          }
                        },
                        likes: { bsonType: 'int' },
                        dislikes: { bsonType: 'int' }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        playlists: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['name', 'creation_time', 'state'],
            properties: {
              videos: { bsonType: 'array', items: { bsonType: 'objectId' } },
              name: { bsonType: 'string' },
              creation_time: { bsonType: 'timestamp' },
              state: { bsonType: 'string', enum: ['Active', 'Inactive'] }
            }
          }
        }
      }
    }
  }
});
