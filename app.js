const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'pug')

// router.get('/', (req, res) => {
//     res.status(200).sendFile(path.join(__dirname, 'views', 'home.html'))
// })

// router.get('/why-choose-us', (req, res) => {
//     res.status(200).sendFile(path.join(__dirname, 'views', 'whyChooseUs.html'))
// })

// router.get('/explore-menu', (req, res) => {
//     res.status(200).sendFile(path.join(__dirname, 'views', 'exploreMenu.html'))
// })

// router.get('/delivery&payment', (req, res) => {
//     res.status(200).sendFile(path.join(__dirname, 'views', 'deliveryAndPayment.html'))
// })

// router.get('/follow-us', (req, res) => {
//     res.status(200).sendFile(path.join(__dirname, 'views', 'followUs.html'))
// })

router.get('/', (req, res) => {
    res.status(200).render('home', {
        isActive: "home"
    })
})

router.get('/why-choose-us', (req, res) => {
    res.status(200).render('whyChooseUs', {
        docTitle: "Why Choose us?",
        isActive: "whyChooseUs"
    })
})

router.get('/explore-menu', (req, res) => {
    res.status(200).render('exploreMenu', {
        docTitle: "Explore Menu",
        isActive: "exploreMenu"
    })
})

router.get('/delivery&payment', (req, res) => {
    res.status(200).render('deliveryAndPayment', {
        docTitle: "Delivery & Payment",
        isActive: "deliveryAndPayment"
    })
})

router.get('/follow-us', (req, res) => {
    res.status(200).render('followUs', {
        docTitle: "Follow us",
        isActive: "followUs"
    })
})

router.use((req, res) => {
    res.status(400).render('404', {
        docTitle: 'Page Not Found'
    })
})


app.use(router)

app.listen(8000, () => {
    console.log("Server Listening to the Port 8000")
})