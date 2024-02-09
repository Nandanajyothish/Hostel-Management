// FoodMenu.js
import React, { useState, useEffect } from 'react';
import { getFoodMenu, updateFoodItem, addFoodItem, deleteFoodItem } from '../../../Service/WardenApi';
import './food.css';

const FoodMenu = () => {
  const [menu, setMenu] = useState([]);
  const [newFoodItem, setNewFoodItem] = useState({
    category: '',
    foodname: '',
    time: '',
  });
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateItemId, setUpdateItemId] = useState(null);

  useEffect(() => {
    fetchFoodMenu();
  }, []);

  const fetchFoodMenu = async () => {
    try {
      const data = await getFoodMenu();
      setMenu(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e, field) => {
    setNewFoodItem({ ...newFoodItem, [field]: e.target.value });
  };

  const addFoodItemHandler = async () => {
    try {
      await addFoodItem(newFoodItem);
      setNewFoodItem({ category: '', foodname: '', time: '' });
      fetchFoodMenu();
    } catch (error) {
      console.error(error);
    }
  };

  const updateFoodItemHandler = async (id) => {
    setIsUpdating(true);
    setUpdateItemId(id);

    const existingFoodItem = menu.find((item) => item._id === id);

    if (existingFoodItem) {
      setNewFoodItem({
        category: existingFoodItem.category,
        foodname: existingFoodItem.foodname,
        time: existingFoodItem.time,
      });
    }
  };

  const cancelUpdateHandler = () => {
    setIsUpdating(false);
    setUpdateItemId(null);
    setNewFoodItem({ category: '', foodname: '', time: '' });
  };

  const saveUpdateHandler = async () => {
    try {
      await updateFoodItem(updateItemId, newFoodItem);
      setIsUpdating(false);
      setUpdateItemId(null);
      setNewFoodItem({ category: '', foodname: '', time: '' });
      fetchFoodMenu();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteFoodItemHandler = async (id) => {
    try {
      await deleteFoodItem(id);
      fetchFoodMenu();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="food-menu-container">
      <div className="food-form">
        <h2>{isUpdating ? 'Update Food Item' : 'Add New Food Item'}</h2>
        <div>
          <label>Category:</label>
          <input type="text" value={newFoodItem.category} onChange={(e) => handleInputChange(e, 'category')} />
        </div>
        <div>
          <label>Food Name:</label>
          <input type="text" value={newFoodItem.foodname} onChange={(e) => handleInputChange(e, 'foodname')} />
        </div>
        <div>
          <label>Time:</label>
          <input type="text" value={newFoodItem.time} onChange={(e) => handleInputChange(e, 'time')} />
        </div>
        {isUpdating ? (
          <>
            <button onClick={cancelUpdateHandler}>Cancel Update</button>
            <button onClick={saveUpdateHandler}>Save Update</button>
          </>
        ) : (
          <button onClick={addFoodItemHandler}>Add Food Item</button>
        )}
      </div>
      <h1>Food Menu</h1>
      <table className="food-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Items</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {menu.map((item) => (
            <tr key={item._id}>
              <td>{item.category}</td>
              <td>{item.foodname}</td>
              <td>{item.time}</td>
              <td>
                <button onClick={() => updateFoodItemHandler(item._id)}>Update</button>
                <button onClick={() => deleteFoodItemHandler(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FoodMenu;
