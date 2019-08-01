const tableData = [
    {
        day: '1 Feb',
        day_name: 'Mon', carbs: 0, proteins: 0, fat: 0, kcal: 0,
        children: [
            {
                meal: 'breakfast', carbs: 0, proteins: 0, fat: 0, kcal: 0,
                children: [
                    {ingredient: 'egg', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'bread', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'sauce', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'tea', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                ]
            },
            {
                meal: 'dinner', carbs: 0, proteins: 0, fat: 0, kcal: 0,
                children: [
                    {ingredient: 'egg', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'bread', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'sauce', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'tea', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                ]
            }
        ]
    },
    {
        day: '2 Feb',
        day_name: 'Tue',
        children: [
            {
                meal: 'breakfast', carbs: 0, proteins: 0, fat: 0, kcal: 0,
                children: [
                    {ingredient: 'egg', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'bread', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'sauce', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'tea', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                ]
            },
            {
                meal: 'dinner', carbs: 0, proteins: 0, fat: 0, kcal: 0,
                children: [
                    {ingredient: 'egg', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'bread', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'sauce', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'tea', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                ]
            }
        ]
    },
    {
        day: '3 Feb',
        day_name: 'Wed',
        children: [
            {
                meal: 'breakfast', carbs: 0, proteins: 0, fat: 0, kcal: 0,
                children: [
                    {ingredient: 'egg', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'bread', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'sauce', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'tea', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                ]
            },
            {
                meal: 'dinner', carbs: 0, proteins: 0, fat: 0, kcal: 0,
                children: [
                    {ingredient: 'egg', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'bread', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'sauce', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'tea', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                ]
            }
        ]
    },
    {
        day: '4 Feb',
        day_name: 'Thu',
        children: [
            {
                meal: 'breakfast', carbs: 0, proteins: 0, fat: 0, kcal: 0,
                children: [
                    {ingredient: 'egg', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'bread', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'sauce', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'tea', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                ]
            },
            {
                meal: 'dinner', carbs: 0, proteins: 0, fat: 0, kcal: 0,
                children: [
                    {ingredient: 'egg', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'bread', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'sauce', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'tea', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                ]
            }
        ]
    },
    {
        day: '5 Feb',
        day_name: 'Fri',
        children: [
            {
                meal: 'breakfast', carbs: 0, proteins: 0, fat: 0, kcal: 0,
                children: [
                    {ingredient: 'egg', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'bread', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'sauce', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'tea', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                ]
            },
            {
                meal: 'dinner', carbs: 0, proteins: 0, fat: 0, kcal: 0,
                children: [
                    {ingredient: 'egg', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'bread', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'sauce', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                    {ingredient: 'tea', carbs: 12, proteins: 24, fat: 10, kcal: 300},
                ]
            }
        ]
    }
]

const columns = [
    {id: 'day', label: 'Nr'},
    {id: 'day_name', label: 'Day'},
    {id: 'meal', label: 'Meal'},
    {id: 'ingredient', label: 'Ingredient'},
    {id: 'carbs', label: 'Carbs (g)'},
    {id: 'proteins', label: 'Proteins (g)'},
    {id: 'fat', label: 'Fat (g)'},
    {id: 'kcal', label: 'Calories (kcal)'}
]

export default {
    tableData, columns
}