# Single Responsibility Principle (SRP) in SOLID

## **Understanding SRP**
The **Single Responsibility Principle (SRP)** states that a component should have **one and only one responsibility**. This means that a component should focus **only on rendering UI**, while data-fetching logic should be handled separately.

---

## **Problem: A Quiz List Component That Violates SRP**
A naive approach would be to have a component that **both fetches and renders** quiz data:

### ❌ **Incorrect Implementation: Mixing Responsibilities**
```jsx
function QuizList() {
    const [quizList, setQuizList] = useState([]);

    useEffect(() => {
        fetch('/api/quiz')
            .then(async (res) => {
                const data = await res.json();
                setQuizList(data);
            });
    }, []);

    return (
        <ul>
            {quizList.map((quiz) => (
                <li key={quiz.id}>
                    {quiz.name} - {quiz.description}
                </li>
            ))}
        </ul>
    );
}
```
### **Why is this wrong?**
🔴 The `QuizList` component is responsible for **both** fetching the quiz list **and** rendering it.  
🔴 If we need to change the fetching logic (e.g., use GraphQL instead of REST), we have to modify the component, breaking **SRP**.  
🔴 This makes the component **harder to test and maintain**.  

---

## **Solution: Extract the Data Fetching Logic into a Custom Hook**
To follow **SRP**, we separate concerns by **creating a custom hook** for fetching data.

### ✅ **Step 1: Create a Custom Hook for Fetching Data**
📂 **File:** `quiz-list.hook.js`
```jsx
import { useState, useEffect } from 'react';

export const useQuizList = () => {
    const [quizList, setQuizList] = useState([]);

    useEffect(() => {
        fetch('/api/quiz')
            .then(async (res) => {
                const data = await res.json();
                setQuizList(data);
            });
    }, []);

    return quizList;
};
```
🔹 Now, this hook **only handles data fetching**, making it **reusable** for other components.  

---

### ✅ **Step 2: Update the `QuizList` Component to Focus on Rendering**
📂 **File:** `QuizList.js`
```jsx
import { useQuizList } from './quiz-list.hook.js';

function QuizList() {
    const quizList = useQuizList();

    return (
        <ul>
            {quizList.map((quiz) => (
                <li key={quiz.id}>
                    {quiz.question}
                </li>
            ))}
        </ul>
    );
}
```
🔹 Now, `QuizList` **only renders** the quiz list, **without worrying about fetching data**.  

---

## **Why Is This a Better Approach?**
✅ The `QuizList` component now **follows SRP**—it **only** handles UI rendering.  
✅ The `useQuizList` hook **encapsulates fetching logic**, making it **reusable and testable**.  
✅ We can **change how we fetch data** (REST, GraphQL, local storage) without modifying `QuizList`.  

---

By following **SRP**, we make our components **cleaner, more reusable, and easier to maintain**! 🚀





## **Understanding SRP**


# Open/Closed Principle (OCP) in SOLID

## **Understanding OCP**
The **Open/Closed Principle** states that a component should be **open for extension** but **closed for modification**. This means that we should be able to extend the behavior of a component **without modifying its existing code**.

---

## **Problem: A Quiz Item Component That Violates OCP**
Let's say we have a component that renders different types of quiz items:  
- **Multiple Choice**
- **Boolean**
- **Short Answer**

A naive implementation might look like this:

```jsx
function QuizItem({ item }) {
    // Render multiple-choice quiz item
    if (quiz.type === 'multiple-choice') {
        return <MultipleChoiceComponent item={item} />;
    }

    // Render boolean quiz item
    if (quiz.type === 'boolean') {
        return <BooleanComponent item={item} />;
    }

    // Render short-answer quiz item
    if (quiz.type === 'short-answer') {
        return <ShortAnswerComponent item={item} />;
    }

    return null; // If the quiz type is unknown
}
```

### **What’s wrong with this approach?**
Every time we add a new quiz type (e.g., "dropdown"), we need to **modify** this component by adding another `if` condition.  
This violates the **Open/Closed Principle** because the component is **not closed for modification**—each new quiz type requires changing existing logic.

---

## **Solution: Applying OCP**
To fix this, we should **separate each quiz type into its own component** and use a dynamic rendering approach.

### **Step 1: Create Individual Components**
Instead of handling all quiz types in one place, we create separate components:

```jsx
export const MultipleChoiceQuizItem = ({ item }) => {
    return <div>Render multiple-choice quiz</div>;
};

export const BooleanQuizItem = ({ item }) => {
    return <div>Render boolean quiz</div>;
};

export const ShortAnswerQuizItem = ({ item }) => {
    return <div>Render short-answer quiz</div>;
};
```

### **Step 2: Create a Renderer Object**
Now, we define an object that maps quiz types to their respective components:

```jsx
const quizRenderer = {
    'multiple-choice': MultipleChoiceQuizItem,
    'short-answer': ShortAnswerQuizItem,
    'boolean': BooleanQuizItem,
};
```

### **Step 3: Implement the `QuizItem` Component**
The `QuizItem` component now dynamically selects the correct component **without modifying itself**:

```jsx
function QuizItem({ item }) {
    const ItemComponent = quizRenderer[item.type];
    return ItemComponent ? <ItemComponent item={item} /> : null;
}
```

---

## **Adding a New Quiz Type ("Dropdown")**
Now, if we need to support a new type of quiz (e.g., **Dropdown**), we **don’t need to touch the `QuizItem` component** at all!

### **Step 1: Create the new component**
```jsx
export const DropdownQuizItem = ({ item }) => {
    return <div>Render dropdown quiz</div>;
};
```

### **Step 2: Simply Update the Renderer Object**
```jsx
const quizRenderer = {
    'multiple-choice': MultipleChoiceQuizItem,
    'short-answer': ShortAnswerQuizItem,
    'boolean': BooleanQuizItem,
    'dropdown': DropdownQuizItem, // New type added without modifying QuizItem!
};
```

---

## **Why Is This a Better Approach?**
✅ The `QuizItem` component **never needs modification** when new quiz types are added.  
✅ The system is **easier to maintain and extend**.  
✅ **Follows the Open/Closed Principle**—open for extension (new types), closed for modification (no changes needed in existing logic).  

By using this approach, we **future-proof** our component and make it **scalable and maintainable**! 🚀

# Liskov Substitution Principle (LSP) in SOLID

## **Understanding LSP**
The **Liskov Substitution Principle (LSP)** states that **subtypes must be substitutable for their base types** without altering the correctness of the program.

In simpler terms, if a component expects a certain type, we should be able to replace it with any subtype without causing issues.

---

## **Problem: Potential LSP Violation in `QuizItem`**
Currently, each quiz type is a separate component, dynamically selected via the `quizRenderer` object:

```jsx
const quizRenderer = {
    'multiple-choice': MultipleChoiceQuizItem,
    'short-answer': ShortAnswerQuizItem,
    'boolean': BooleanQuizItem,
};
```

However, there’s **no enforced contract** ensuring all quiz components behave consistently. This can cause issues such as:

✅ Some quiz item components **missing required props**.

✅ Different components returning **inconsistent JSX structures**.

✅ Unexpected **UI behavior** when switching quiz types.

For example, assume all quiz types require a **question** and **options**, but a **Short Answer** quiz has no options. If we try to render `options.map(...)` inside `QuizItem`, it will break.

---

## **Solution: Enforcing LSP with a Common Interface**
Instead of letting each quiz component define its own structure freely, we can **define a common contract** (via TypeScript or PropTypes) to ensure consistency.

### **Step 1: Define a Common Interface**

Using **PropTypes (JavaScript):**
```jsx
import PropTypes from 'prop-types';

export const QuizItemPropTypes = {
    item: PropTypes.shape({
        question: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        options: PropTypes.array,  // Optional for types that support it
    }).isRequired,
};
```

Using **TypeScript:**
```tsx
interface QuizItemProps {
    item: {
        question: string;
        type: string;
        options?: string[];  // Only for types that need it
    };
}
```

---

### **Step 2: Apply the Interface to All Quiz Components**

Now, all quiz components **must follow the same structure**:

```jsx
export const MultipleChoiceQuizItem = ({ item }) => {
    return (
        <div>
            <p>{item.question}</p>
            <select>
                {item.options?.map((opt, index) => (
                    <option key={index}>{opt}</option>
                ))}
            </select>
        </div>
    );
};

MultipleChoiceQuizItem.propTypes = QuizItemPropTypes;
```

Similarly, we ensure **Short Answer** follows the same contract:

```jsx
export const ShortAnswerQuizItem = ({ item }) => {
    return (
        <div>
            <p>{item.question}</p>
            <input type="text" />
        </div>
    );
};

ShortAnswerQuizItem.propTypes = QuizItemPropTypes;
```

---

### **Step 3: Ensure `QuizItem` Can Safely Substitute Any Quiz Type**

```jsx
function QuizItem({ item }) {
    const ItemComponent = quizRenderer[item.type];

    return ItemComponent ? <ItemComponent item={item} /> : null;
}

QuizItem.propTypes = QuizItemPropTypes;
```

---

## **Why Is This a Better Approach?**
✅ **Every quiz type follows the same structure** (ensuring substitutability).  
✅ **No risk of missing required props**, preventing runtime errors.  
✅ **Follows LSP correctly**, making the system **extensible and maintainable**.  

By applying these changes, **we ensure any new quiz type can be substituted seamlessly without breaking the system**—a key aspect of the **Liskov Substitution Principle**! 🚀

