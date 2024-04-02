import pickle
import joblib
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.feature_selection import SelectFromModel
from sklearn.metrics import confusion_matrix
from sklearn.model_selection import train_test_split
from sklearn.impute import SimpleImputer

# Load dataset
dataset = pd.read_csv('datasets\dataset_1.csv', sep=',', low_memory=False)

# Identify non-numeric columns
non_numeric_columns = dataset.select_dtypes(include=['object']).columns

# Drop non-numeric columns
X = dataset.drop(['ID', 'md5', 'legitimate'] + list(non_numeric_columns), axis=1)
y = dataset['legitimate']

# Impute missing values
imputer = SimpleImputer(strategy='mean')
X_imputed = imputer.fit_transform(X)

# Features selection
extratrees = RandomForestClassifier().fit(X_imputed, y)
model = SelectFromModel(extratrees, prefit=True)
X_new = model.transform(X_imputed)

# Get selected feature indices
selected_feature_indices = np.where(model.get_support())[0]
selected_features = X.columns[selected_feature_indices]

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X_new, y, test_size=0.2)

# Train RandomForestClassifier
model = RandomForestClassifier(n_estimators=99)
model.fit(X_train, y_train)

# Evaluate model
score = model.score(X_test, y_test)
print("Accuracy:", score * 100, '%')

# Save model and features
joblib.dump(model, "model/model.pkl")
with open('model/features.pkl', 'wb') as f:
    pickle.dump(selected_features, f)

# False Positives and Negatives
res = model.predict(X_new)
mt = confusion_matrix(y, res)
print("False positive rate : %f %%" % ((mt[0][1] / float(sum(mt[0]))) * 100))
print('False negative rate : %f %%' % (mt[1][0] / float(sum(mt[1])) * 100))
