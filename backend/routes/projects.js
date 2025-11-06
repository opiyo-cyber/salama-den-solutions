const express = require('express');
const router = express.Router();

// Sample projects data (you can move this to a database later)
const projects = [
    {
        id: 1,
        title: 'Solar Installation - Corporate Office',
        category: 'Solar Energy',
        description: 'Complete solar power system installation for a 5-story office building',
        image: '/images/project1.jpg',
        date: '2024-09'
    },
    {
        id: 2,
        title: 'Rural Electrification Project',
        category: 'Electrical Solutions',
        description: 'Bringing electricity to 200+ rural households',
        image: '/images/project2.jpg',
        date: '2024-08'
    },
    {
        id: 3,
        title: 'Biogas Plant Installation',
        category: 'Renewable Energy',
        description: 'Biogas system for dairy farm waste management',
        image: '/images/project3.jpg',
        date: '2024-07'
    },
    {
        id: 4,
        title: 'Security System Implementation',
        category: 'Surveillance & Security',
        description: 'CCTV and electric fence installation for residential estate',
        image: '/images/project4.jpg',
        date: '2024-06'
    }
];

// GET /api/projects - Get all projects
router.get('/', (req, res) => {
    const { category } = req.query;
    
    if (category) {
        const filtered = projects.filter(p => 
            p.category.toLowerCase() === category.toLowerCase()
        );
        return res.json(filtered);
    }
    
    res.json(projects);
});

// GET /api/projects/:id - Get single project
router.get('/:id', (req, res) => {
    const project = projects.find(p => p.id === parseInt(req.params.id));
    
    if (!project) {
        return res.status(404).json({ message: 'Project not found' });
    }
    
    res.json(project);
});

// GET /api/projects/categories - Get all categories
router.get('/meta/categories', (req, res) => {
    const categories = [...new Set(projects.map(p => p.category))];
    res.json(categories);
});

module.exports = router;
