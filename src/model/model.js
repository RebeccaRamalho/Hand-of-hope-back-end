const db = require("../db");
const mysql = require("mysql2");

//I_Admin i want to connect
exports.getAdmin = (email, callback) => {
  db.query(
    `SELECT * FROM admins WHERE email = ${mysql.escape(email)};`,
    (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result);
    }
  );
};

/*2_creation of the admin's account*/
exports.createAccount = (admin, callback) => {
  db.query(
    `INSERT INTO admins (user_name, email, password) VALUES (${mysql.escape(
      admin.user_name
    )},  ${mysql.escape(admin.email)}, ${mysql.escape(admin.password)});`,
    (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result);
    }
  );
};
/*3_admin i want to create an article*/
exports.createArticle = (article, callback) => {
  db.query(
    `INSERT INTO article(title, img, tags, resume_article, content_article, author_article, video, admin_id) VALUES (
    ${mysql.escape(
      article.title)},
    ${mysql.escape(
      article.img
    )},
    ${mysql.escape(
      article.tags)},
    ${mysql.escape(
      article.resume_article
    )},
    ${mysql.escape(
      article.content_article)},
    ${mysql.escape(
      article.author_article
    )},
    ${mysql.escape(
      article.video)}, 
    ${mysql.escape(
      article.admin_id
    )})`,
    (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result);
    }
  );
};

/*4_Admin i want to see all articles*/
exports.getllArticle = (callback) => {
  db.query(`select * from article;`, (err, result) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, result);
  });
};
/*5_user i want to see the last 3 articles article*/
exports.get3LastArticle = (callback) => {
  db.query(
    `select * from article order by article_id desc limit 3;`,
    (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result);
    }
  );
};
/*6_user i want to see the details of an article*/
exports.getArticleDetails = (article_id, callback) => {
  db.query(
    `select * from article  where article_id=${article_id};`,
    (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result);
    }
  );
};
/*7_Admin i want to delete an article*/
exports.delete_an_article = (article_id, callback) => {
  db.query(
    `DELETE FROM article WHERE article_id = ${article_id};`,
    (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result);
    }
  );
};
/*8_Admin i want to update an article*/
// model non async pour la modification d'un article
exports.updateArticles = (article_id, article, admin_id, callback) => {
  db.query(
    `UPDATE article  SET title="${article.title}", img="${article.img}",tags="${article.tags}", resume_article="${article.resume_article}", content_article="${article.content_article}", author_article="${article.author_article}", video="${article.video}" WHERE article_id = ${article_id} ;`,

    (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result);
    }
  );
};
/*9_user i want to add a review*/
exports.addAReview = (review, callback) => {
  db.query(
    `INSERT INTO reviewer (last_name, first_name, opinion, role) values (${mysql.escape(
      review.last_name
    )}, ${mysql.escape(review.first_name)}, ${mysql.escape(
      review.opinion
    )}, ${mysql.escape(review.role)});`,

    (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result);
    }
  );
};
/*User i want to get the last 3 review*/
/*10_user i want to get all review*/
exports.getLastReview = (callback) => {
  db.query(`SELECT * FROM reviewer limit 3;`, (err, result) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, result);
  });
};
/*11_Admin i want to delete a review*/
exports.delete_an_review = (id, callback) => {
  db.query(`DELETE FROM reviewer WHERE id =${id};`, (err, result) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, result);
  });
};

/*12_user i want to get all article tag from a specifiq tag*/
exports.getArticlesTag = (tags, callback) => {
  db.query(`SELECT * from article where tags ="${tags}";`, (err, result) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, result);
  });
};