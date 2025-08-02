import { useState, useEffect } from 'react'
import styles from '../styles/Wishlist.module.css'
import { StarIcon, HeartIcon } from '../utils/icons'

export default function Wishlist({ wishlistData }) {
  const [wishlist, setWishlist] = useState([])
  const [showAddForm, setShowAddForm] = useState(false)
  const [newItem, setNewItem] = useState({
    name: '',
    type: 'romantic',
    priority: 'medium'
  })

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('dateosWishlist')
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist))
    } else {
      setWishlist(wishlistData)
    }
  }, [wishlistData])

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (wishlist.length > 0) {
      localStorage.setItem('dateosWishlist', JSON.stringify(wishlist))
    }
  }, [wishlist])

  const handleVote = (id) => {
    const updatedList = wishlist.map(item => 
      item.id === id ? { ...item, votes: item.votes + 1 } : item
    ).sort((a, b) => b.votes - a.votes)
    setWishlist(updatedList)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to remove this item?')) {
      setWishlist(wishlist.filter(item => item.id !== id))
    }
  }

  const handleAdd = (e) => {
    e.preventDefault()
    if (newItem.name.trim()) {
      const item = {
        id: Date.now(),
        name: newItem.name.trim(),
        type: newItem.type,
        priority: newItem.priority,
        votes: 0
      }
      setWishlist([...wishlist, item].sort((a, b) => b.votes - a.votes))
      setNewItem({ name: '', type: 'romantic', priority: 'medium' })
      setShowAddForm(false)
    }
  }

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'var(--accent)'
      case 'medium': return 'var(--primary)'
      case 'low': return 'var(--primary-light)'
      default: return 'var(--primary)'
    }
  }

  const getTypeIcon = (type) => {
    switch(type) {
      case 'romantic': return '🌙'
      case 'foodie': return '🍰'
      case 'cultural': return '📚'
      case 'active': return '⚡'
      case 'relaxing': return '☁️'
      default: return '✨'
    }
  }

  return (
    <section id="wishlist" className={styles.wishlist}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.icon}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
                    fill="currentColor" />
            </svg>
          </div>
          <h2 className={styles.title}>Our Dream Board</h2>
          <p className={styles.subtitle}>Vote for your favorites and let's make them happen!</p>
        </div>
        
        <div className={styles.wishlistGrid}>
          {wishlist.map((item, index) => (
            <div 
              key={item.id} 
              className={`${styles.wishlistCard} ${index === 0 ? styles.topPick : ''}`}
            >
              {index === 0 && (
                <div className={styles.topPickBadge}>
                  <StarIcon size={16} filled />
                  <span>Top Pick!</span>
                </div>
              )}
              
              <button 
                className={styles.deleteButton}
                onClick={() => handleDelete(item.id)}
                aria-label="Delete item"
              >
                ×
              </button>
              
              <div className={styles.cardHeader}>
                <span className={styles.typeIcon}>{getTypeIcon(item.type)}</span>
                <div 
                  className={styles.priorityBadge}
                  style={{ backgroundColor: getPriorityColor(item.priority) }}
                >
                  {item.priority}
                </div>
              </div>
              
              <h3 className={styles.itemName}>{item.name}</h3>
              
              <div className={styles.voteSection}>
                <button 
                  className={styles.voteButton}
                  onClick={() => handleVote(item.id)}
                >
                  <HeartIcon size={20} color="currentColor" filled />
                  <span className={styles.voteCount}>{item.votes}</span>
                </button>
                
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon 
                      key={i}
                      size={16} 
                      color="currentColor" 
                      filled={i < Math.ceil(item.votes / 2)}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {!showAddForm ? (
          <button className={styles.addNew} onClick={() => setShowAddForm(true)}>
            <div className={styles.addNewIcon}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <p className={styles.addNewText}>
              Have a new dream date idea? Let's add it to our star collection!
            </p>
          </button>
        ) : (
          <form className={styles.addForm} onSubmit={handleAdd}>
            <h3>Add Your Dream Date</h3>
            
            <div className={styles.formGroup}>
              <label htmlFor="name">Date Idea</label>
              <input
                id="name"
                type="text"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                placeholder="e.g., Sunset picnic at the beach"
                required
              />
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="type">Type</label>
                <select
                  id="type"
                  value={newItem.type}
                  onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
                >
                  <option value="romantic">Romantic 🌙</option>
                  <option value="foodie">Foodie 🍰</option>
                  <option value="cultural">Cultural 📚</option>
                  <option value="active">Active ⚡</option>
                  <option value="relaxing">Relaxing ☁️</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="priority">Priority</label>
                <select
                  id="priority"
                  value={newItem.priority}
                  onChange={(e) => setNewItem({ ...newItem, priority: e.target.value })}
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>
            
            <div className={styles.formActions}>
              <button type="submit" className="btn btn-primary">
                Add to Wishlist
              </button>
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={() => {
                  setShowAddForm(false)
                  setNewItem({ name: '', type: 'romantic', priority: 'medium' })
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}