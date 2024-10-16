let friends = [
    {
        name: 'Sixten',

        likes: [
            'bananas',
            'strawberries',
            'blueberries'
        ]
    },
    {
        name: 'Khalid',

        likes: [
            'papaya',
            'pear',
            'pineapple'
        ]
    },
    {
        name: 'Lisa',

        likes: [
            'raspberries',
            'watermelon',
            'apple'
        ]
    }
];

let x;
for (const friend of friends) {
    console.log(friend.name +"      "+ friend.likes);
     x=(friend.name + friend.likes)
     console.log("......................"+ x);

     
}
