-- Categories and tags are one editorial concept. Preserve existing tag data
-- before removing the redundant tables; a post keeps its first tag when it
-- does not already have a category.
INSERT OR IGNORE INTO `categories` (`name`, `slug`, `description`)
SELECT `name`, `slug`, NULL FROM `tags`;--> statement-breakpoint
UPDATE `posts`
SET `category_id` = (
  SELECT `categories`.`id`
  FROM `post_tags`
  INNER JOIN `tags` ON `tags`.`id` = `post_tags`.`tag_id`
  INNER JOIN `categories` ON `categories`.`slug` = `tags`.`slug`
  WHERE `post_tags`.`post_id` = `posts`.`id`
  ORDER BY `post_tags`.`tag_id`
  LIMIT 1
)
WHERE `category_id` IS NULL
  AND EXISTS (
    SELECT 1 FROM `post_tags`
    INNER JOIN `tags` ON `tags`.`id` = `post_tags`.`tag_id`
    INNER JOIN `categories` ON `categories`.`slug` = `tags`.`slug`
    WHERE `post_tags`.`post_id` = `posts`.`id`
  );--> statement-breakpoint
DROP TABLE `post_tags`;--> statement-breakpoint
DROP TABLE `tags`;
