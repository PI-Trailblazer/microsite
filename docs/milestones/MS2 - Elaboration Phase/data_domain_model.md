---

sidebar_position: 7

---

# Data Domain Model

In order to store our data, we will utilize two databases, as described in the following:

![Data Domain Model](../../../static/img/data_domain.png)

**User attributes:**  ID, name, phone number, email address, and hashed password.

**Offer attributes:** ID, description, street, city, postal code, price, and reviews.

The decision to employ two separate databases (DBs) rather than a single database with two tables was primarily motivated by two key considerations. Firstly, utilizing distinct DBs enables faster response times, as queries executed on one DB will not interfere with those on the other. Secondly, from a security standpoint, it is prudent to segregate sensitive user data from offer-related information. This separation minimizes the potential consequences in the event of a data exposure, as linking a user to their offers could have catastrophic implications.
