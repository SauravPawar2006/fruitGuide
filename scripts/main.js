const fruits = [
    {
        name: "Apple",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop",
        benefits: [
            "High in fiber (4g per apple) - aids digestion",
            "Rich in vitamin C - boosts immune system",
            "Contains antioxidants - reduces disease risk",
            "Low calories (95 per apple) - supports weight management",
            "Pectin content helps lower cholesterol"
        ],
        concerns: [
            "High sugar content (19g per apple) - concern for diabetics",
            "Pesticide residues if not organic",
            "Apple seeds contain cyanide compounds (toxic in large amounts)",
            "May cause digestive issues in people with IBS",
            "Acidic nature can erode tooth enamel"
        ]
    },
    {
        name: "Banana",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop",
        benefits: [
            "Excellent potassium source (358mg) - heart health",
            "Natural energy from carbohydrates",
            "Vitamin B6 supports brain function",
            "Fiber aids digestive health",
            "Natural electrolytes for post-workout recovery"
        ],
        concerns: [
            "High in natural sugars (14g) - blood sugar spikes",
            "Relatively high calories (105 per banana)",
            "May trigger migraines in sensitive individuals",
            "Can cause constipation in some people",
            "Latex allergy cross-reaction possible"
        ]
    },
    {
        name: "Orange",
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
        benefits: [
            "Exceptional vitamin C (70mg) - immune support",
            "Folate content supports cell division",
            "Fiber promotes digestive health",
            "Flavonoids reduce inflammation",
            "Potassium supports heart health"
        ],
        concerns: [
            "High citric acid - tooth enamel erosion",
            "May interact with certain medications",
            "Can trigger heartburn in acid-sensitive people",
            "Natural sugars (12g) affect blood glucose",
            "Allergic reactions possible (citrus allergy)"
        ]
    },
    {
        name: "Strawberry",
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400&h=300&fit=crop",
        benefits: [
            "Very high vitamin C (85mg per cup)",
            "Rich in antioxidants - anti-aging properties",
            "Low in calories (49 per cup)",
            "Manganese supports bone health",
            "Anthocyanins improve heart health"
        ],
        concerns: [
            "Common allergen - can cause severe reactions",
            "High pesticide residue levels",
            "Seeds may irritate diverticulitis",
            "Natural salicylates - aspirin sensitivity",
            "May stain teeth due to natural pigments"
        ]
    },
    {
        name: "Grape",
        image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&h=300&fit=crop",
        benefits: [
            "Resveratrol in skin - heart protective",
            "Antioxidants reduce cancer risk",
            "Natural hydration (82% water)",
            "Potassium supports blood pressure",
            "Quick energy from natural sugars"
        ],
        concerns: [
            "Very high sugar content (16g per cup)",
            "Heavy pesticide use in conventional farming",
            "Choking hazard for young children",
            "Can cause rapid blood sugar spikes",
            "May worsen symptoms in candida overgrowth"
        ]
    },
    {
        name: "Mango",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=300&fit=crop",
        benefits: [
            "Exceptional vitamin A - eye health",
            "High vitamin C content",
            "Digestive enzymes aid protein breakdown",
            "Fiber supports gut health",
            "Antioxidants boost immune system"
        ],
        concerns: [
            "Very high sugar content (23g per cup)",
            "High calorie density (107 per cup)",
            "Skin contains urushiol - can cause rash",
            "May cause digestive upset in large amounts",
            "Cross-reaction with poison ivy allergy"
        ]
    },
    {
        name: "Pineapple",
        image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400&h=300&fit=crop",
        benefits: [
            "Bromelain enzyme aids digestion",
            "High vitamin C content",
            "Anti-inflammatory properties",
            "Manganese supports metabolism",
            "May help reduce arthritis symptoms"
        ],
        concerns: [
            "High acidity - stomach irritation possible",
            "Bromelain can cause mouth sores",
            "High sugar content (16g per cup)",
            "May increase bleeding risk with blood thinners",
            "Core and skin can cause digestive blockage"
        ]
    },
    {
        name: "Blueberry",
        image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400&h=300&fit=crop",
        benefits: [
            "Highest antioxidant content of common fruits",
            "Anthocyanins improve brain function",
            "Low in calories (84 per cup)",
            "Vitamin K supports bone health",
            "May improve memory and cognitive function"
        ],
        concerns: [
            "Can cause digestive upset in large amounts",
            "May interfere with blood sugar control",
            "Salicylate content - aspirin allergy concern",
            "Expensive and often treated with pesticides",
            "Can stain teeth and clothing"
        ]
    },
    {
        name: "Watermelon",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop",
        benefits: [
            "Excellent hydration (91% water)",
            "Lycopene protects against sun damage",
            "Very low in calories (46 per cup)",
            "Citrulline supports circulation",
            "Natural electrolytes for hydration"
        ],
        concerns: [
            "High glycemic index - rapid blood sugar rise",
            "Large serving sizes lead to excess sugar",
            "Seeds can cause digestive blockage",
            "May cause digestive upset in large amounts",
            "Short shelf life - spoils quickly"
        ]
    },
    {
        name: "Avocado",
        image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=300&fit=crop",
        benefits: [
            "Healthy monounsaturated fats",
            "High in fiber (10g per avocado)",
            "Potassium content higher than bananas",
            "Supports nutrient absorption",
            "May help reduce cholesterol levels"
        ],
        concerns: [
            "Very high in calories (320 per avocado)",
            "High fat content - weight gain risk",
            "Common allergen - oral allergy syndrome",
            "Expensive and short shelf life",
            "Persin toxin harmful to pets"
        ]
    },
    {
        name: "Kiwi",
        image: "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=400&h=300&fit=crop",
        benefits: [
            "Extremely high vitamin C (137mg per kiwi)",
            "Good source of fiber",
            "Vitamin K supports bone health",
            "Actinidin enzyme aids protein digestion",
            "Low glycemic index"
        ],
        concerns: [
            "Common allergen - can cause severe reactions",
            "Fuzzy skin may cause mouth irritation",
            "High vitamin K - blood thinner interaction",
            "May cause digestive upset in sensitive people",
            "Short shelf life when ripe"
        ]
    },
    {
        name: "Pomegranate",
        image: "https://images.unsplash.com/photo-1603833797131-3c0a798aa1c3?w=400&h=300&fit=crop",
        benefits: [
            "Exceptional antioxidant content",
            "Anti-inflammatory properties",
            "May improve heart health",
            "Supports prostate health",
            "Vitamin C and folate content"
        ],
        concerns: [
            "High in natural sugars",
            "May interact with blood pressure medications",
            "Seeds can be hard to digest",
            "Stains clothing and teeth permanently",
            "Expensive and time-consuming to eat"
        ]
    },
    {
        name: "Cherry",
        image: "https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=400&h=300&fit=crop",
        benefits: [
            "Natural melatonin aids sleep",
            "Anti-inflammatory compounds",
            "May reduce exercise-induced muscle pain",
            "Rich in antioxidants",
            "Potassium supports heart health"
        ],
        concerns: [
            "Pits contain cyanide compounds",
            "High sugar content",
            "May cause digestive upset in large amounts",
            "Short season and expensive",
            "Can trigger gout attacks in susceptible people"
        ]
    },
    {
        name: "Papaya",
        image: "https://images.unsplash.com/photo-1617112848923-cc2234396a8d?w=400&h=300&fit=crop",
        benefits: [
            "Papain enzyme aids digestion",
            "Exceptional vitamin C content",
            "Vitamin A supports eye health",
            "Anti-inflammatory properties",
            "May help wound healing"
        ],
        concerns: [
            "May cause allergic reactions",
            "Unripe papaya unsafe during pregnancy",
            "Latex cross-reactivity possible",
            "High sugar content when ripe",
            "May interact with blood-thinning medications"
        ]
    },
    {
        name: "Grapefruit",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
        benefits: [
            "High vitamin C content",
            "May aid weight loss",
            "Lycopene in pink varieties",
            "Low glycemic index",
            "Pectin helps lower cholesterol"
        ],
        concerns: [
            "Interferes with many medications",
            "Very acidic - tooth enamel damage",
            "May cause heartburn",
            "Bitter taste requires added sugar for many",
            "Can cause photosensitivity reactions"
        ]
    },
    {
        name: "Peach",
        image: "https://images.unsplash.com/photo-1629828874514-d71b180d2bd9?w=400&h=300&fit=crop",
        benefits: [
            "Good source of vitamins A and C",
            "Fiber supports digestive health",
            "Antioxidants protect against disease",
            "Low in calories",
            "Potassium supports heart health"
        ],
        concerns: [
            "High pesticide residue levels",
            "Pits contain cyanide compounds",
            "May cause allergic reactions",
            "Natural sugars affect blood glucose",
            "Fuzzy skin may irritate sensitive mouths"
        ]
    },
    {
        name: "Raspberry",
        image: "https://images.unsplash.com/photo-1577003811926-53b288a6896d?w=400&h=300&fit=crop",
        benefits: [
            "Very high fiber content (8g per cup)",
            "Rich in antioxidants",
            "Vitamin C supports immune system",
            "Low in calories",
            "May help regulate blood sugar"
        ],
        concerns: [
            "Seeds may irritate diverticulitis",
            "Can cause allergic reactions",
            "High in natural salicylates",
            "Expensive and perishable",
            "May cause digestive upset in large amounts"
        ]
    },
    {
        name: "Coconut",
        image: "https://images.unsplash.com/photo-1585515656641-c7ad6ac9043b?w=400&h=300&fit=crop",
        benefits: [
            "Medium-chain fatty acids for quick energy",
            "Natural electrolytes in coconut water",
            "Lauric acid has antimicrobial properties",
            "Good source of fiber",
            "May support brain health"
        ],
        concerns: [
            "Very high in saturated fat",
            "High calorie density",
            "May raise cholesterol in some people",
            "Tree nut allergy considerations",
            "Hard shell poses injury risk when opening"
        ]
    },
    {
        name: "Lemon",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop",
        benefits: [
            "High vitamin C content",
            "May aid iron absorption",
            "Citric acid may prevent kidney stones",
            "Pectin supports heart health",
            "Low in calories and sugar"
        ],
        concerns: [
            "Extremely acidic - tooth enamel erosion",
            "Can cause heartburn and acid reflux",
            "May cause photosensitivity reactions",
            "Citrus allergy possible",
            "Wax coating on conventional lemons"
        ]
    }
];

function createFruitCard(fruit) {
    return `
        <div class="fruit-card bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl">
            <div class="h-48 bg-cover bg-center" style="background-image: url('${fruit.image}')"></div>
            <div class="p-6">
                <h3 class="text-2xl font-bold text-gray-800 mb-4 text-center">${fruit.name}</h3>
                <div class="mb-6">
                    <div class="flex items-center mb-3">
                        <i class="fas fa-heart text-green-500 mr-2"></i>
                        <h4 class="text-lg font-semibold text-green-700">Health Benefits</h4>
                    </div>
                    <ul class="space-y-2">
                        ${fruit.benefits.map(benefit => `
                            <li class="flex items-start">
                                <i class="fas fa-check-circle text-green-500 mr-2 mt-1 text-sm"></i>
                                <span class="text-sm text-gray-700">${benefit}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                <div>
                    <div class="flex items-center mb-3">
                        <i class="fas fa-exclamation-triangle text-orange-500 mr-2"></i>
                        <h4 class="text-lg font-semibold text-orange-700">Considerations & Cautions</h4>
                    </div>
                    <ul class="space-y-2">
                        ${fruit.concerns.map(concern => `
                            <li class="flex items-start">
                                <i class="fas fa-exclamation-circle text-orange-500 mr-2 mt-1 text-sm"></i>
                                <span class="text-sm text-gray-700">${concern}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
}

function displayFruits(fruitsToShow) {
    const grid = document.getElementById('fruitGrid');
    grid.innerHTML = fruitsToShow.map(createFruitCard).join('');
}

function filterFruits() {
    const searchTerm = document.getElementById('fruitSearch').value.toLowerCase();
    const filteredFruits = fruits.filter(fruit => 
        fruit.name.toLowerCase().includes(searchTerm)
    );
    displayFruits(filteredFruits);
}

// Initialize
displayFruits(fruits);

// Search functionality
document.getElementById('fruitSearch').addEventListener('input', filterFruits);