import { Question } from '../types';

export const DATA_ANALYST_QUESTIONS: Question[] = [
  // ==================== ADVANCED SQL & DATABASES (Questions 1-15) ====================
  {
    id: 'da-1',
    type: 'mcq',
    category: 'Advanced SQL',
    text: 'What is the primary difference between a "Window Function" (e.g., RANK()) and a standard "GROUP BY" aggregation?',
    options: [
      'Window functions can only be used in the WHERE clause.',
      'Window functions perform calculations across a set of table rows that are related to the current row, without collapsing them into a single output row.',
      'GROUP BY is faster for all types of datasets.',
      'Window functions require a separate temporary table to store results.'
    ],
    correctAnswer: 'Window functions perform calculations across a set of table rows that are related to the current row, without collapsing them into a single output row.'
  },
  {
    id: 'da-2',
    type: 'mcq',
    category: 'Advanced SQL',
    text: 'What is the purpose of "Common Table Expressions" (CTEs) in SQL, particularly recursive CTEs?',
    options: [
      'To cache query results for faster subsequent execution.',
      'To create temporary result sets that can reference themselves, enabling hierarchical or recursive queries on tree/graph data.',
      'To encrypt sensitive data in the query results.',
      'To compress the database storage size.'
    ],
    correctAnswer: 'To create temporary result sets that can reference themselves, enabling hierarchical or recursive queries on tree/graph data.'
  },
  {
    id: 'da-3',
    type: 'mcq',
    category: 'Advanced SQL',
    text: 'In SQL query optimization, what does "Index Scan" vs "Index Seek" indicate in execution plans?',
    options: [
      'They are identical operations with different naming conventions.',
      'Index Seek directly navigates to specific rows using the index; Index Scan reads all rows in the index leaf level, with Seek being generally more efficient for selective queries.',
      'Index Scan is always faster than Index Seek.',
      'Index Seek only works on primary key columns.'
    ],
    correctAnswer: 'Index Seek directly navigates to specific rows using the index; Index Scan reads all rows in the index leaf level, with Seek being generally more efficient for selective queries.'
  },
  {
    id: 'da-4',
    type: 'mcq',
    category: 'Advanced SQL',
    text: 'What is "Query Folding" in Power Query/M and why is it important?',
    options: [
      'A technique to fold query results into smaller chunks.',
      'The process of converting high-level transformations into native database queries to push computation to the source system for efficiency.',
      'A method to compress query results.',
      'A way to merge multiple queries into one.'
    ],
    correctAnswer: 'The process of converting high-level transformations into native database queries to push computation to the source system for efficiency.'
  },
  {
    id: 'da-5',
    type: 'mcq',
    category: 'Advanced SQL',
    text: 'What is the "CAP Theorem" in distributed database systems?',
    options: [
      'A theorem about maximizing database capacity.',
      'It states that a distributed system can only guarantee two of three: Consistency, Availability, and Partition tolerance.',
      'A formula for calculating query cost.',
      'A security protocol for database access control.'
    ],
    correctAnswer: 'It states that a distributed system can only guarantee two of three: Consistency, Availability, and Partition tolerance.'
  },
  {
    id: 'da-6',
    type: 'mcq',
    category: 'Advanced SQL',
    text: 'What is "Eventual Consistency" in NoSQL databases?',
    options: [
      'Data is never consistent across nodes.',
      'A consistency model where updates will eventually propagate to all nodes, allowing temporary inconsistencies for better availability.',
      'A strict consistency model requiring immediate synchronization.',
      'A method to consistently log database events.'
    ],
    correctAnswer: 'A consistency model where updates will eventually propagate to all nodes, allowing temporary inconsistencies for better availability.'
  },
  {
    id: 'da-7',
    type: 'mcq',
    category: 'Advanced SQL',
    text: 'What is the difference between "INNER JOIN" and "LEFT JOIN" in SQL?',
    options: [
      'There is no difference; they return identical results.',
      'INNER JOIN returns only matching rows from both tables; LEFT JOIN returns all rows from the left table and matching rows from the right, with NULLs for non-matches.',
      'LEFT JOIN is faster than INNER JOIN.',
      'INNER JOIN can only be used on primary keys.'
    ],
    correctAnswer: 'INNER JOIN returns only matching rows from both tables; LEFT JOIN returns all rows from the left table and matching rows from the right, with NULLs for non-matches.'
  },
  {
    id: 'da-8',
    type: 'mcq',
    category: 'Advanced SQL',
    text: 'What is "Normalization" in database design and what problem does it solve?',
    options: [
      'A process to speed up query execution by denormalizing data.',
      'Organizing data to minimize redundancy and dependency by dividing large tables into smaller ones and defining relationships.',
      'A method to normalize statistical distributions.',
      'A technique to compress database files.'
    ],
    correctAnswer: 'Organizing data to minimize redundancy and dependency by dividing large tables into smaller ones and defining relationships.'
  },
  {
    id: 'da-9',
    type: 'mcq',
    category: 'Advanced SQL',
    text: 'What is "ACID" compliance in database transactions?',
    options: [
      'A chemical property of database hardware.',
      'Atomicity, Consistency, Isolation, Durability - properties guaranteeing reliable processing of database transactions.',
      'A method to speed up acid-fast database queries.',
      'An encryption standard for database security.'
    ],
    correctAnswer: 'Atomicity, Consistency, Isolation, Durability - properties guaranteeing reliable processing of database transactions.'
  },
  {
    id: 'da-10',
    type: 'mcq',
    category: 'Advanced SQL',
    text: 'What is a "Covering Index" in SQL optimization?',
    options: [
      'An index that covers all columns in the database.',
      'A non-clustered index that includes all columns needed for a query, eliminating the need to access the table data.',
      'An index that covers only the WHERE clause.',
      'A clustered index on all tables.'
    ],
    correctAnswer: 'A non-clustered index that includes all columns needed for a query, eliminating the need to access the table data.'
  },
  {
    id: 'da-11',
    type: 'mcq',
    category: 'Advanced SQL',
    text: 'What is "Partitioning" in large-scale databases?',
    options: [
      'Dividing the database into separate physical machines only.',
      'Splitting large tables into smaller, more manageable pieces based on partition keys to improve query performance and maintenance.',
      'A method to encrypt partitions of the database.',
      'Creating backup partitions of the data.'
    ],
    correctAnswer: 'Splitting large tables into smaller, more manageable pieces based on partition keys to improve query performance and maintenance.'
  },
  {
    id: 'da-12',
    type: 'mcq',
    category: 'Advanced SQL',
    text: 'What is the purpose of "EXPLAIN" or "EXPLAIN ANALYZE" in SQL?',
    options: [
      'To add comments explaining the query logic.',
      'To display the execution plan showing how the database will execute a query, helping identify performance bottlenecks.',
      'To explain SQL syntax to beginners.',
      'To export query results to external files.'
    ],
    correctAnswer: 'To display the execution plan showing how the database will execute a query, helping identify performance bottlenecks.'
  },
  {
    id: 'da-13',
    type: 'mcq',
    category: 'Advanced SQL',
    text: 'What is "Materialized View" and when should it be used?',
    options: [
      'A virtual view that always shows real-time data.',
      'A pre-computed view stored on disk that trades storage for query performance, useful for expensive aggregations on large datasets.',
      'A view that materializes only when queried.',
      'A temporary view that disappears after use.'
    ],
    correctAnswer: 'A pre-computed view stored on disk that trades storage for query performance, useful for expensive aggregations on large datasets.'
  },
  {
    id: 'da-14',
    type: 'mcq',
    category: 'Advanced SQL',
    text: 'What is "Slowly Changing Dimension Type 6" (Hybrid SCD)?',
    options: [
      'A dimension that changes six times per year.',
      'Combining Type 1, 2, and 3 approaches to maintain both current and historical views with additional columns.',
      'A method to change dimensions six times faster.',
      'A deprecated SCD type no longer used.'
    ],
    correctAnswer: 'Combining Type 1, 2, and 3 approaches to maintain both current and historical views with additional columns.'
  },
  {
    id: 'da-15',
    type: 'mcq',
    category: 'Advanced SQL',
    text: 'What is "Change Data Capture" (CDC) in data warehousing?',
    options: [
      'Capturing changes in data visualization colors.',
      'A pattern to track and capture changes in source data for incremental updates to the data warehouse.',
      'A method to capture data entry errors.',
      'A technique to compress changing data.'
    ],
    correctAnswer: 'A pattern to track and capture changes in source data for incremental updates to the data warehouse.'
  },

  // ==================== STATISTICS & EXPERIMENTAL DESIGN (Questions 16-30) ====================
  {
    id: 'da-16',
    type: 'mcq',
    category: 'Statistical Inference',
    text: 'In A/B testing, what does "Statistical Power" represent?',
    options: [
      'The probability of correctly rejecting the null hypothesis when it is false (avoiding a Type II error).',
      'The probability of rejecting the null hypothesis when it is true (Type I error).',
      'The total sample size required for the test.',
      'The magnitude of the difference between the control and variant groups.'
    ],
    correctAnswer: 'The probability of correctly rejecting the null hypothesis when it is false (avoiding a Type II error).'
  },
  {
    id: 'da-17',
    type: 'mcq',
    category: 'Statistical Inference',
    text: 'What is the difference between "Type I Error" and "Type II Error"?',
    options: [
      'They are the same type of error with different names.',
      'Type I Error (False Positive) rejects a true null hypothesis; Type II Error (False Negative) fails to reject a false null hypothesis.',
      'Type I is worse than Type II in all scenarios.',
      'Type II Error only occurs in small sample sizes.'
    ],
    correctAnswer: 'Type I Error (False Positive) rejects a true null hypothesis; Type II Error (False Negative) fails to reject a false null hypothesis.'
  },
  {
    id: 'da-18',
    type: 'mcq',
    category: 'Statistical Inference',
    text: 'What does "P-value" indicate in hypothesis testing?',
    options: [
      'The probability that the null hypothesis is true.',
      'The probability of obtaining test results at least as extreme as the observed results, assuming the null hypothesis is correct.',
      'The probability that the alternative hypothesis is true.',
      'The percentage of data that supports the hypothesis.'
    ],
    correctAnswer: 'The probability of obtaining test results at least as extreme as the observed results, assuming the null hypothesis is correct.'
  },
  {
    id: 'da-19',
    type: 'mcq',
    category: 'Statistical Inference',
    text: 'What is "Confidence Interval" and how should it be interpreted?',
    options: [
      'A range that contains the true population parameter with a specified level of confidence (e.g., 95%) if the experiment were repeated many times.',
      'A range that has a 95% probability of containing the true value.',
      'The interval between data collection and analysis.',
      'A confidence score for machine learning models.'
    ],
    correctAnswer: 'A range that contains the true population parameter with a specified level of confidence (e.g., 95%) if the experiment were repeated many times.'
  },
  {
    id: 'da-20',
    type: 'mcq',
    category: 'Statistical Inference',
    text: 'What is "Bonferroni Correction" used for?',
    options: [
      'Correcting data entry errors in Italian datasets.',
      'Adjusting significance levels when performing multiple comparisons to control the family-wise error rate.',
      'A method to correct skewed distributions.',
      'Correcting for seasonal variations in time series.'
    ],
    correctAnswer: 'Adjusting significance levels when performing multiple comparisons to control the family-wise error rate.'
  },
  {
    id: 'da-21',
    type: 'mcq',
    category: 'Experimental Design',
    text: 'What is "Randomized Controlled Trial" (RCT) and why is it considered the gold standard?',
    options: [
      'A trial where participants are randomly selected from the population.',
      'Random assignment to treatment/control groups minimizes confounding variables, allowing causal inference.',
      'A trial with random data collection times.',
      'A method to control random noise in data.'
    ],
    correctAnswer: 'Random assignment to treatment/control groups minimizes confounding variables, allowing causal inference.'
  },
  {
    id: 'da-22',
    type: 'mcq',
    category: 'Experimental Design',
    text: 'What is "Selection Bias" in data analysis?',
    options: [
      'Bias introduced by selecting the wrong statistical test.',
      'Systematic error introduced when the sample is not representative of the population due to non-random selection.',
      'Bias in selecting colors for visualizations.',
      'A bias toward selecting significant results only.'
    ],
    correctAnswer: 'Systematic error introduced when the sample is not representative of the population due to non-random selection.'
  },
  {
    id: 'da-23',
    type: 'mcq',
    category: 'Experimental Design',
    text: 'What is "Survivorship Bias"?',
    options: [
      'Bias toward survivors in medical studies only.',
      'Logical error of concentrating on entities that passed a selection process while overlooking those that did not.',
      'A bias in survival analysis statistics.',
      'Bias introduced by surviving hardware failures.'
    ],
    correctAnswer: 'Logical error of concentrating on entities that passed a selection process while overlooking those that did not.'
  },
  {
    id: 'da-24',
    type: 'mcq',
    category: 'Experimental Design',
    text: 'What is "Simpson\'s Paradox"?',
    options: [
      'A paradox about simplicity in data analysis.',
      'A trend appearing in different groups of data disappears or reverses when these groups are combined.',
      'A paradox discovered by the Simpsons TV show writers.',
      'A statistical method for simple random sampling.'
    ],
    correctAnswer: 'A trend appearing in different groups of data disappears or reverses when these groups are combined.'
  },
  {
    id: 'da-25',
    type: 'mcq',
    category: 'Statistical Inference',
    text: 'What is the "Central Limit Theorem" (CLT)?',
    options: [
      'A theorem about the central role of limits in calculus.',
      'The sampling distribution of the mean approaches a normal distribution as sample size increases, regardless of population distribution.',
      'A theorem limiting the central tendency measures.',
      'A method to centralize data for analysis.'
    ],
    correctAnswer: 'The sampling distribution of the mean approaches a normal distribution as sample size increases, regardless of population distribution.'
  },
  {
    id: 'da-26',
    type: 'mcq',
    category: 'Statistical Inference',
    text: 'What is "Heteroscedasticity" in regression analysis?',
    options: [
      'A condition where all variables have the same variance.',
      'Non-constant variance of errors across the range of predicted values, violating OLS assumptions.',
      'A method to standardize variance across samples.',
      'A type of hierarchical clustering.'
    ],
    correctAnswer: 'Non-constant variance of errors across the range of predicted values, violating OLS assumptions.'
  },
  {
    id: 'da-27',
    type: 'mcq',
    category: 'Statistical Inference',
    text: 'What is "Multicollinearity" in regression models?',
    options: [
      'Multiple linear regression models.',
      'High correlation among independent variables, causing instability in coefficient estimates.',
      'Multiple collinear data points in a scatter plot.',
      'A method to create multiple regression lines.'
    ],
    correctAnswer: 'High correlation among independent variables, causing instability in coefficient estimates.'
  },
  {
    id: 'da-28',
    type: 'mcq',
    category: 'Experimental Design',
    text: 'What is "Propensity Score Matching" used for?',
    options: [
      'Matching data entry propensities.',
      'Reducing selection bias in observational studies by matching treated and control units with similar propensity scores.',
      'Matching data points by their propensity to cluster.',
      'A method to score the propensity of model accuracy.'
    ],
    correctAnswer: 'Reducing selection bias in observational studies by matching treated and control units with similar propensity scores.'
  },
  {
    id: 'da-29',
    type: 'mcq',
    category: 'Experimental Design',
    text: 'What is "Difference-in-Differences" (DiD) estimation?',
    options: [
      'Calculating the difference between two differences in means.',
      'A quasi-experimental technique comparing changes over time between treatment and control groups to estimate causal effects.',
      'A method to find differences in data quality.',
      'A technique for differencing time series data.'
    ],
    correctAnswer: 'A quasi-experimental technique comparing changes over time between treatment and control groups to estimate causal effects.'
  },
  {
    id: 'da-30',
    type: 'mcq',
    category: 'Statistical Inference',
    text: 'What is "Bayesian Inference" compared to Frequentist approach?',
    options: [
      'A faster method for inference.',
      'Updating prior beliefs with observed data to obtain posterior distributions, treating parameters as random variables.',
      'An inference method used only for small datasets.',
      'A method that rejects all prior knowledge.'
    ],
    correctAnswer: 'Updating prior beliefs with observed data to obtain posterior distributions, treating parameters as random variables.'
  },

  // ==================== DATA MODELING & WAREHOUSING (Questions 31-42) ====================
  {
    id: 'da-31',
    type: 'mcq',
    category: 'Data Modeling',
    text: 'What is the "Slowly Changing Dimension" (SCD) Type 2 strategy used for in a Data Warehouse?',
    options: [
      'Overwriting existing data with new values.',
      'Creating a new record for every change to track the full history of the dimension over time.',
      'Adding a new column to the existing record to store the previous value.',
      'Deleting old records to save storage space.'
    ],
    correctAnswer: 'Creating a new record for every change to track the full history of the dimension over time.'
  },
  {
    id: 'da-32',
    type: 'mcq',
    category: 'Data Modeling',
    text: 'What is "Star Schema" in dimensional modeling?',
    options: [
      'A schema shaped like a star constellation.',
      'A design with a central fact table surrounded by denormalized dimension tables, optimizing for query performance.',
      'A schema with five tables arranged in a star pattern.',
      'A method to prioritize star-rated data.'
    ],
    correctAnswer: 'A design with a central fact table surrounded by denormalized dimension tables, optimizing for query performance.'
  },
  {
    id: 'da-33',
    type: 'mcq',
    category: 'Data Modeling',
    text: 'What is "Snowflake Schema" and how does it differ from Star Schema?',
    options: [
      'A schema used only for winter data.',
      'Normalized dimension tables that reduce redundancy but require more joins compared to Star Schema.',
      'A schema with six points like a snowflake.',
      'A temporary schema that melts away after use.'
    ],
    correctAnswer: 'Normalized dimension tables that reduce redundancy but require more joins compared to Star Schema.'
  },
  {
    id: 'da-34',
    type: 'mcq',
    category: 'Data Modeling',
    text: 'What is "Data Vault 2.0" modeling approach?',
    options: [
      'A method to vault data in secure storage.',
      'A methodology emphasizing agility and scalability through hubs, links, and satellites for enterprise data warehouses.',
      'A vault for storing backup data.',
      'Version 2.0 of database security.'
    ],
    correctAnswer: 'A methodology emphasizing agility and scalability through hubs, links, and satellites for enterprise data warehouses.'
  },
  {
    id: 'da-35',
    type: 'mcq',
    category: 'Data Modeling',
    text: 'What is "Anchor Modeling" in data warehousing?',
    options: [
      'A modeling technique for maritime data.',
      'An agile modeling technique using anchors, attributes, and ties to handle changing requirements over time.',
      'A method to anchor data to specific servers.',
      'A modeling approach for anchoring visualizations.'
    ],
    correctAnswer: 'An agile modeling technique using anchors, attributes, and ties to handle changing requirements over time.'
  },
  {
    id: 'da-36',
    type: 'mcq',
    category: 'Data Modeling',
    text: 'What is "Factless Fact Table"?',
    options: [
      'A table with no facts or data.',
      'A fact table without measures, used to capture relationships or events between dimensions.',
      'A table containing only false facts.',
      'A temporary table that deletes facts.'
    ],
    correctAnswer: 'A fact table without measures, used to capture relationships or events between dimensions.'
  },
  {
    id: 'da-37',
    type: 'mcq',
    category: 'Data Modeling',
    text: 'What is "Junk Dimension" in dimensional modeling?',
    options: [
      'A dimension containing junk or dirty data.',
      'A dimension combining low-cardinality flags and indicators to reduce the number of foreign keys in fact tables.',
      'A dimension that should be deleted.',
      'A temporary dimension for testing.'
    ],
    correctAnswer: 'A dimension combining low-cardinality flags and indicators to reduce the number of foreign keys in fact tables.'
  },
  {
    id: 'da-38',
    type: 'mcq',
    category: 'Data Modeling',
    text: 'What is "Degenerate Dimension"?',
    options: [
      'A dimension that has lost its meaning.',
      'A dimension key that exists in the fact table without a separate dimension table, like transaction numbers.',
      'A dimension with zero values.',
      'A deprecated dimension no longer used.'
    ],
    correctAnswer: 'A dimension key that exists in the fact table without a separate dimension table, like transaction numbers.'
  },
  {
    id: 'da-39',
    type: 'mcq',
    category: 'Data Modeling',
    text: 'What is "Conformed Dimension" in enterprise data warehousing?',
    options: [
      'Dimensions that conform to industry standards.',
      'Dimensions that are shared across multiple fact tables and data marts for consistent reporting.',
      'Dimensions that have been confirmed accurate.',
      'Dimensions that conform to SQL standards.'
    ],
    correctAnswer: 'Dimensions that are shared across multiple fact tables and data marts for consistent reporting.'
  },
  {
    id: 'da-40',
    type: 'mcq',
    category: 'Data Modeling',
    text: 'What is "Bridge Table" in many-to-many relationships?',
    options: [
      'A table used to bridge two databases.',
      'An associative table that resolves many-to-many relationships between dimensions and fact tables.',
      'A table for bridging network connections.',
      'A temporary table bridging old and new data.'
    ],
    correctAnswer: 'An associative table that resolves many-to-many relationships between dimensions and fact tables.'
  },
  {
    id: 'da-41',
    type: 'mcq',
    category: 'Data Modeling',
    text: 'What is "Late Arriving Dimensions" problem in ETL?',
    options: [
      'Dimensions that arrive late to meetings.',
      'When dimension data arrives after fact data, requiring special handling to maintain referential integrity.',
      'Dimensions with late timestamps.',
      'A delay in ETL processing.'
    ],
    correctAnswer: 'When dimension data arrives after fact data, requiring special handling to maintain referential integrity.'
  },
  {
    id: 'da-42',
    type: 'mcq',
    category: 'Data Modeling',
    text: 'What is "Temporal Database Design"?',
    options: [
      'Designing databases for temporary use.',
      'Incorporating time dimensions to track data changes over time, supporting historical and future data.',
      'A design for time-series databases only.',
      'Temporary tables for ETL processes.'
    ],
    correctAnswer: 'Incorporating time dimensions to track data changes over time, supporting historical and future data.'
  },

  // ==================== BUSINESS INTELLIGENCE & VISUALIZATION (Questions 43-55) ====================
  {
    id: 'da-43',
    type: 'mcq',
    category: 'Business Intelligence',
    text: 'What is the "Semantic Layer" in a modern BI tool like Looker or Power BI?',
    options: [
      'A layer that translates natural language into SQL.',
      'A business representation of corporate data that helps end-users access data using common business terms rather than technical table names.',
      'The physical storage layer of the data warehouse.',
      'The encryption layer for data at rest.'
    ],
    correctAnswer: 'A business representation of corporate data that helps end-users access data using common business terms rather than technical table names.'
  },
  {
    id: 'da-44',
    type: 'mcq',
    category: 'Business Intelligence',
    text: 'What is "Self-Service BI" and what are its challenges?',
    options: [
      'BI tools that serve themselves automatically.',
      'Enabling business users to create reports without IT, risking data governance issues and inconsistent metrics.',
      'BI systems that require no user interaction.',
      'A service model for BI vendors.'
    ],
    correctAnswer: 'Enabling business users to create reports without IT, risking data governance issues and inconsistent metrics.'
  },
  {
    id: 'da-45',
    type: 'mcq',
    category: 'Business Intelligence',
    text: 'What is "Data Lineage" in BI systems?',
    options: [
      'The family history of data scientists.',
      'Tracking data from its origin through transformations to its final destination for impact analysis and debugging.',
      'A linear arrangement of data points.',
      'The chronological order of data entry.'
    ],
    correctAnswer: 'Tracking data from its origin through transformations to its final destination for impact analysis and debugging.'
  },
  {
    id: 'da-46',
    type: 'mcq',
    category: 'Dashboard UX',
    text: 'What is "Chartjunk" in data visualization?',
    options: [
      'Junk data displayed in charts.',
      'Visual elements in charts and graphs that are not necessary to comprehend the information or that distract the viewer.',
      'Old charts that should be deleted.',
      'A type of junk mail containing charts.'
    ],
    correctAnswer: 'Visual elements in charts and graphs that are not necessary to comprehend the information or that distract the viewer.'
  },
  {
    id: 'da-47',
    type: 'mcq',
    category: 'Dashboard UX',
    text: 'What is the "Data-Ink Ratio" principle by Edward Tufte?',
    options: [
      'The ratio of data to ink used in printing.',
      'Maximizing the proportion of ink used to present actual data vs. non-data ink (gridlines, decorations).',
      'The cost ratio of data storage to ink cartridges.',
      'A ratio for mixing data colors with ink.'
    ],
    correctAnswer: 'Maximizing the proportion of ink used to present actual data vs. non-data ink (gridlines, decorations).'
  },
  {
    id: 'da-48',
    type: 'mcq',
    category: 'Dashboard UX',
    text: 'What is "Preattentive Attributes" in visualization?',
    options: [
      'Attributes that require careful attention to perceive.',
      'Visual properties (color, size, position) processed immediately by the visual system without conscious effort.',
      'Attributes assigned before data analysis.',
      'Preliminary attributes in draft visualizations.'
    ],
    correctAnswer: 'Visual properties (color, size, position) processed immediately by the visual system without conscious effort.'
  },
  {
    id: 'da-49',
    type: 'mcq',
    category: 'Dashboard UX',
    text: 'What is "Small Multiples" (Trellis/Trellis Display) technique?',
    options: [
      'Multiple small charts showing different data.',
      'Series of similar graphs using the same scale and axes, allowing comparison across categories or time periods.',
      'Small multiples of the same data point.',
      'A multiplication technique for small numbers.'
    ],
    correctAnswer: 'Series of similar graphs using the same scale and axes, allowing comparison across categories or time periods.'
  },
  {
    id: 'da-50',
    type: 'mcq',
    category: 'Business Intelligence',
    text: 'What is "OLAP" (Online Analytical Processing) cube?',
    options: [
      'A cube-shaped database for storing data.',
      'A multidimensional array of data allowing fast analysis through operations like slicing, dicing, drilling up/down.',
      'A cube that processes data online.',
      'An online application for cube calculations.'
    ],
    correctAnswer: 'A multidimensional array of data allowing fast analysis through operations like slicing, dicing, drilling up/down.'
  },
  {
    id: 'da-51',
    type: 'mcq',
    category: 'Business Intelligence',
    text: 'What is "Data Governance" framework?',
    options: [
      'Government regulations on data usage.',
      'A comprehensive approach to managing data availability, usability, integrity, and security in an enterprise.',
      'A framework for governing data center locations.',
      'Political governance of data.'
    ],
    correctAnswer: 'A comprehensive approach to managing data availability, usability, integrity, and security in an enterprise.'
  },
  {
    id: 'da-52',
    type: 'mcq',
    category: 'Dashboard UX',
    text: 'What is "Color Theory" consideration for accessible visualizations?',
    options: [
      'Using as many colors as possible.',
      'Considering color blindness, ensuring sufficient contrast, and not using color as the only encoding channel.',
      'Only using primary colors.',
      'Matching colors to corporate branding only.'
    ],
    correctAnswer: 'Considering color blindness, ensuring sufficient contrast, and not using color as the only encoding channel.'
  },
  {
    id: 'da-53',
    type: 'mcq',
    category: 'Business Intelligence',
    text: 'What is "Master Data Management" (MDM)?',
    options: [
      'Managing master copies of databases.',
      'A method to define and manage critical data to provide a single point of reference across the organization.',
      'Managing data for master\'s degree programs.',
      'A master key for data encryption.'
    ],
    correctAnswer: 'A method to define and manage critical data to provide a single point of reference across the organization.'
  },
  {
    id: 'da-54',
    type: 'mcq',
    category: 'Business Intelligence',
    text: 'What is "Data Catalog" in modern data stacks?',
    options: [
      'A catalog of data products for sale.',
      'An organized inventory of data assets with metadata, enabling data discovery and governance.',
      'A catalog of database vendors.',
      'A printed catalog of data reports.'
    ],
    correctAnswer: 'An organized inventory of data assets with metadata, enabling data discovery and governance.'
  },
  {
    id: 'da-55',
    type: 'mcq',
    category: 'Dashboard UX',
    text: 'What is "Cognitive Load" in dashboard design?',
    options: [
      'The weight of the computer monitor.',
      'The mental effort required to process information; good design minimizes unnecessary cognitive load.',
      'The load time of the dashboard.',
      'The number of calculations the dashboard performs.'
    ],
    correctAnswer: 'The mental effort required to process information; good design minimizes unnecessary cognitive load.'
  },

  // ==================== PREDICTIVE ANALYTICS & TIME SERIES (Questions 56-68) ====================
  {
    id: 'da-56',
    type: 'mcq',
    category: 'Predictive Analytics',
    text: 'When using "Exponential Smoothing" for time-series forecasting, what does the "Alpha" parameter control?',
    options: [
      'The seasonality of the data.',
      'The weight given to the most recent observation versus the historical average.',
      'The number of periods to forecast into the future.',
      'The confidence interval of the prediction.'
    ],
    correctAnswer: 'The weight given to the most recent observation versus the historical average.'
  },
  {
    id: 'da-57',
    type: 'mcq',
    category: 'Predictive Analytics',
    text: 'What is "ARIMA" model in time series analysis?',
    options: [
      'A method to arrange data in order.',
      'AutoRegressive Integrated Moving Average - a class of models that captures temporal structures in data.',
      'An arrangement of data for analysis.',
      'A type of database indexing.'
    ],
    correctAnswer: 'AutoRegressive Integrated Moving Average - a class of models that captures temporal structures in data.'
  },
  {
    id: 'da-58',
    type: 'mcq',
    category: 'Predictive Analytics',
    text: 'What is "Seasonal Decomposition" of time series?',
    options: [
      'Decomposing seasonal data into smaller files.',
      'Separating a time series into trend, seasonal, and residual components to better understand underlying patterns.',
      'Removing seasonal data from analysis.',
      'A method to compress seasonal data.'
    ],
    correctAnswer: 'Separating a time series into trend, seasonal, and residual components to better understand underlying patterns.'
  },
  {
    id: 'da-59',
    type: 'mcq',
    category: 'Predictive Analytics',
    text: 'What is "Cohort Analysis" used for?',
    options: [
      'Analyzing military cohorts.',
      'Analyzing behavior of groups of users sharing common characteristics over time, common in retention analysis.',
      'Analyzing data in cohort batches.',
      'A method to group data by size.'
    ],
    correctAnswer: 'Analyzing behavior of groups of users sharing common characteristics over time, common in retention analysis.'
  },
  {
    id: 'da-60',
    type: 'mcq',
    category: 'Predictive Analytics',
    text: 'What is "RFM Analysis" in customer analytics?',
    options: [
      'Radio Frequency Modulation analysis.',
      'Recency, Frequency, Monetary - a method to identify high-value customers based on purchase behavior.',
      'Random Forest Model analysis.',
      'Real-time Financial Monitoring.'
    ],
    correctAnswer: 'Recency, Frequency, Monetary - a method to identify high-value customers based on purchase behavior.'
  },
  {
    id: 'da-61',
    type: 'mcq',
    category: 'Predictive Analytics',
    text: 'What is "Churn Prediction" modeling?',
    options: [
      'Predicting when butter will churn.',
      'Predicting which customers are likely to stop using a product/service to enable proactive retention strategies.',
      'Predicting data churn in ETL processes.',
      'A method to predict churn rate of employees.'
    ],
    correctAnswer: 'Predicting which customers are likely to stop using a product/service to enable proactive retention strategies.'
  },
  {
    id: 'da-62',
    type: 'mcq',
    category: 'Predictive Analytics',
    text: 'What is "Prophet" by Facebook for time series?',
    options: [
      'A religious forecasting tool.',
      'An automated forecasting procedure that handles missing data, outliers, and seasonal effects with intuitive parameters.',
      'A tool to predict social media trends.',
      'A method to forecast prophet-based religions.'
    ],
    correctAnswer: 'An automated forecasting procedure that handles missing data, outliers, and seasonal effects with intuitive parameters.'
  },
  {
    id: 'da-63',
    type: 'mcq',
    category: 'Predictive Analytics',
    text: 'What is "Monte Carlo Simulation" used for?',
    options: [
      'Simulating casino games.',
      'Using random sampling to model probability distributions and understand risk/uncertainty in forecasts.',
      'Simulating traffic in Monte Carlo.',
      'A method to generate random data.'
    ],
    correctAnswer: 'Using random sampling to model probability distributions and understand risk/uncertainty in forecasts.'
  },
  {
    id: 'da-64',
    type: 'mcq',
    category: 'Predictive Analytics',
    text: 'What is "Survival Analysis" in statistics?',
    options: [
      'Analysis of survival rates in medical studies only.',
      'Analyzing time-to-event data, handling censored observations where the event has not yet occurred.',
      'Analysis of surviving business strategies.',
      'A method to analyze surviving data points.'
    ],
    correctAnswer: 'Analyzing time-to-event data, handling censored observations where the event has not yet occurred.'
  },
  {
    id: 'da-65',
    type: 'mcq',
    category: 'Predictive Analytics',
    text: 'What is "Lift" in marketing campaign analysis?',
    options: [
      'The physical lifting of marketing materials.',
      'The improvement in response rate from a targeted campaign compared to a random baseline.',
      'A lift in data storage capacity.',
      'The lift algorithm for clustering.'
    ],
    correctAnswer: 'The improvement in response rate from a targeted campaign compared to a random baseline.'
  },
  {
    id: 'da-66',
    type: 'mcq',
    category: 'Predictive Analytics',
    text: 'What is "Look-alike Modeling" in audience targeting?',
    options: [
      'Modeling that looks like other models.',
      'Finding prospects similar to existing high-value customers using clustering or similarity algorithms.',
      'A modeling technique that looks alike to competitors.',
      'A method to make models look similar.'
    ],
    correctAnswer: 'Finding prospects similar to existing high-value customers using clustering or similarity algorithms.'
  },
  {
    id: 'da-67',
    type: 'mcq',
    category: 'Predictive Analytics',
    text: 'What is "Uplift Modeling"?',
    options: [
      'Modeling the uplift of buildings.',
      'Predicting the incremental impact of a treatment on an individual, distinguishing persuadables from sure things/lost causes.',
      'A model to uplift data quality.',
      'Uplifting the performance of models.'
    ],
    correctAnswer: 'Predicting the incremental impact of a treatment on an individual, distinguishing persuadables from sure things/lost causes.'
  },
  {
    id: 'da-68',
    type: 'mcq',
    category: 'Predictive Analytics',
    text: 'What is "Cross-Validation" and why is it important?',
    options: [
      'Validating data across different databases.',
      'Partitioning data into training/validation sets multiple times to assess model generalization and reduce overfitting.',
      'Cross-checking validation rules.',
      'A validation method for cross-functional teams.'
    ],
    correctAnswer: 'Partitioning data into training/validation sets multiple times to assess model generalization and reduce overfitting.'
  },

  // ==================== PYTHON & DATA PROCESSING (Questions 69-80) ====================
  {
    id: 'da-69',
    type: 'mcq',
    category: 'Python for Analysis',
    text: 'What is "Vectorization" in NumPy/Pandas and why does it improve performance?',
    options: [
      'Converting data into vector format only.',
      'Performing operations on entire arrays at once using optimized C implementations, avoiding Python loop overhead.',
      'Creating vector graphics from data.',
      'A method to vectorize text data for NLP.'
    ],
    correctAnswer: 'Performing operations on entire arrays at once using optimized C implementations, avoiding Python loop overhead.'
  },
  {
    id: 'da-70',
    type: 'mcq',
    category: 'Python for Analysis',
    text: 'What is the difference between "apply()", "map()", and "applymap()" in Pandas?',
    options: [
      'They are identical functions with different names.',
      'apply() works on DataFrames/Series axis; map() on Series element-wise; applymap() on DataFrames element-wise.',
      'apply() is for math only; map() is for geography; applymap() is for visualization.',
      'They differ only in execution speed.'
    ],
    correctAnswer: 'apply() works on DataFrames/Series axis; map() on Series element-wise; applymap() on DataFrames element-wise.'
  },
  {
    id: 'da-71',
    type: 'mcq',
    category: 'Python for Analysis',
    text: 'What is "Method Chaining" in Pandas and its benefits?',
    options: [
      'Chaining multiple computers together.',
      'Linking multiple operations in a single statement for readable, efficient data transformations.',
      'A method to secure Python code.',
      'Chaining different Python methods randomly.'
    ],
    correctAnswer: 'Linking multiple operations in a single statement for readable, efficient data transformations.'
  },
  {
    id: 'da-72',
    type: 'mcq',
    category: 'Python for Analysis',
    text: 'What is the "GIL" (Global Interpreter Lock) in Python and its implication for data processing?',
    options: [
      'A global lock for internet security.',
      'A mutex protecting access to Python objects that prevents true parallel execution of threads in CPython.',
      'A graphical interface library.',
      'A global indexing lock for databases.'
    ],
    correctAnswer: 'A mutex protecting access to Python objects that prevents true parallel execution of threads in CPython.'
  },
  {
    id: 'da-73',
    type: 'mcq',
    category: 'Python for Analysis',
    text: 'What is "Dask" and when should it be used?',
    options: [
      'A task management tool.',
      'A parallel computing library that scales Pandas/NumPy operations to larger-than-memory datasets and distributed systems.',
      'A dashboard creation library.',
      'A database connection tool.'
    ],
    correctAnswer: 'A parallel computing library that scales Pandas/NumPy operations to larger-than-memory datasets and distributed systems.'
  },
  {
    id: 'da-74',
    type: 'mcq',
    category: 'Python for Analysis',
    text: 'What is "Pandas Profiling" (ydata-profiling)?',
    options: [
      'Profiling the performance of pandas in zoos.',
      'An automated library generating comprehensive exploratory data analysis reports with statistics and visualizations.',
      'A profiling tool for Python interpreters.',
      'A method to profile database queries.'
    ],
    correctAnswer: 'An automated library generating comprehensive exploratory data analysis reports with statistics and visualizations.'
  },
  {
    id: 'da-75',
    type: 'mcq',
    category: 'Python for Analysis',
    text: 'What is "Categorical Data Type" in Pandas and its benefits?',
    options: [
      'Data that can only be categorized.',
      'A memory-efficient type for repeated string values with limited unique values, enabling ordered categories.',
      'A type for categorizing all data automatically.',
      'A method to categorize data by type.'
    ],
    correctAnswer: 'A memory-efficient type for repeated string values with limited unique values, enabling ordered categories.'
  },
  {
    id: 'da-76',
    type: 'mcq',
    category: 'Python for Analysis',
    text: 'What is "GroupBy" operations in Pandas (Split-Apply-Combine)?',
    options: [
      'Grouping data by file type.',
      'Splitting data into groups, applying functions to each group independently, and combining results.',
      'Combining multiple DataFrames into groups.',
      'A method to group Python classes.'
    ],
    correctAnswer: 'Splitting data into groups, applying functions to each group independently, and combining results.'
  },
  {
    id: 'da-77',
    type: 'mcq',
    category: 'Python for Analysis',
    text: 'What is "Merging" vs "Joining" in Pandas?',
    options: [
      'They are completely different operations.',
      'merge() is the generic method; join() is a convenience method for merging on indices with database-style joins.',
      'Merging is for DataFrames; Joining is for Series only.',
      'Joining is faster than Merging.'
    ],
    correctAnswer: 'merge() is the generic method; join() is a convenience method for merging on indices with database-style joins.'
  },
  {
    id: 'da-78',
    type: 'mcq',
    category: 'Python for Analysis',
    text: 'What is "Pivot Table" in Pandas?',
    options: [
      'A table that pivots physically.',
      'A data summarization tool that reorganizes data to show relationships between categorical variables.',
      'A table for pivoting database connections.',
      'A method to pivot chart types.'
    ],
    correctAnswer: 'A data summarization tool that reorganizes data to show relationships between categorical variables.'
  },
  {
    id: 'da-79',
    type: 'mcq',
    category: 'Python for Analysis',
    text: 'What is "Regular Expressions" (Regex) used for in data cleaning?',
    options: [
      'Expressing regular data patterns.',
      'Pattern matching and text manipulation for extracting, validating, and transforming string data.',
      'Regularly expressing data quality issues.',
      'A method to regulate expressions in code.'
    ],
    correctAnswer: 'Pattern matching and text manipulation for extracting, validating, and transforming string data.'
  },
  {
    id: 'da-80',
    type: 'mcq',
    category: 'Python for Analysis',
    text: 'What is "Memory Management" consideration with large DataFrames?',
    options: [
      'Managing computer RAM hardware.',
      'Using appropriate dtypes, chunking data, and clearing variables to prevent memory overflow.',
      'Managing the memory of data analysts.',
      'A method to memorize data patterns.'
    ],
    correctAnswer: 'Using appropriate dtypes, chunking data, and clearing variables to prevent memory overflow.'
  },

  // ==================== ETL & DATA ENGINEERING (Questions 81-90) ====================
  {
    id: 'da-81',
    type: 'mcq',
    category: 'ETL Processes',
    text: 'What is "Idempotency" in data pipelines and why is it critical?',
    options: [
      'A property of being identical to other pipelines.',
      'Running the same operation multiple times produces the same result, ensuring reliability in retry scenarios.',
      'A method to increase pipeline efficiency.',
      'A property of immutable data only.'
    ],
    correctAnswer: 'Running the same operation multiple times produces the same result, ensuring reliability in retry scenarios.'
  },
  {
    id: 'da-82',
    type: 'mcq',
    category: 'ETL Processes',
    text: 'What is "ELT" vs "ETL" and when is each appropriate?',
    options: [
      'They are the same process with different acronyms.',
      'ETL transforms before loading; ELT loads raw data first then transforms, leveraging modern cloud data warehouses.',
      'ELT is older technology; ETL is modern.',
      'ETL is for small data; ELT is for big data only.'
    ],
    correctAnswer: 'ETL transforms before loading; ELT loads raw data first then transforms, leveraging modern cloud data warehouses.'
  },
  {
    id: 'da-83',
    type: 'mcq',
    category: 'ETL Processes',
    text: 'What is "Data Quality" framework dimensions?',
    options: [
      'The physical dimensions of data storage.',
      'Accuracy, completeness, consistency, timeliness, validity, and uniqueness (dimensions to assess data quality).',
      'The dimensions of data visualization.',
      'A framework for data dimensionality reduction.'
    ],
    correctAnswer: 'Accuracy, completeness, consistency, timeliness, validity, and uniqueness (dimensions to assess data quality).'
  },
  {
    id: 'da-84',
    type: 'mcq',
    category: 'ETL Processes',
    text: 'What is "Schema-on-Read" vs "Schema-on-Write"?',
    options: [
      'Reading schema documentation vs writing it.',
      'Schema-on-Write enforces structure at load time (traditional DW); Schema-on-Read applies structure at query time (data lakes).',
      'Reading data before writing schema.',
      'Two methods of database indexing.'
    ],
    correctAnswer: 'Schema-on-Write enforces structure at load time (traditional DW); Schema-on-Read applies structure at query time (data lakes).'
  },
  {
    id: 'da-85',
    type: 'mcq',
    category: 'ETL Processes',
    text: 'What is "Change Data Capture" (CDC) techniques?',
    options: [
      'Capturing changes in data visualization.',
      'Methods to identify and capture changes (timestamp-based, trigger-based, log-based) for incremental data loading.',
      'A technique to capture data changes in photos.',
      'Capturing changes in data team personnel.'
    ],
    correctAnswer: 'Methods to identify and capture changes (timestamp-based, trigger-based, log-based) for incremental data loading.'
  },
  {
    id: 'da-86',
    type: 'mcq',
    category: 'ETL Processes',
    text: 'What is "Data Lineage" in ETL pipelines?',
    options: [
      'The ancestry of data scientists.',
      'Tracking data flow from source to destination, documenting transformations for debugging and impact analysis.',
      'A linear path of data movement.',
      'The lineage of database technologies.'
    ],
    correctAnswer: 'Tracking data flow from source to destination, documenting transformations for debugging and impact analysis.'
  },
  {
    id: 'da-87',
    type: 'mcq',
    category: 'ETL Processes',
    text: 'What is "Upsert" (Merge) operation in ETL?',
    options: [
      'Inserting data upward in a hierarchy.',
      'Atomic operation that inserts new records and updates existing ones based on a key.',
      'A method to assert data quality upward.',
      'Uploading and inserting data simultaneously.'
    ],
    correctAnswer: 'Atomic operation that inserts new records and updates existing ones based on a key.'
  },
  {
    id: 'da-88',
    type: 'mcq',
    category: 'ETL Processes',
    text: 'What is "Watermarking" in streaming data processing?',
    options: [
      'Adding visible watermarks to data visualizations.',
      'Tracking progress in event time to handle late-arriving data in stream processing frameworks.',
      'A method to watermark data for copyright.',
      'Adding watermarks to data exports.'
    ],
    correctAnswer: 'Tracking progress in event time to handle late-arriving data in stream processing frameworks.'
  },
  {
    id: 'da-89',
    type: 'mcq',
    category: 'ETL Processes',
    text: 'What is "Data Profiling" in ETL?',
    options: [
      'Creating profiles of data users.',
      'Analyzing source data to understand structure, content, relationships, and quality before designing ETL.',
      'Profiling the performance of ETL tools.',
      'A method to profile data security.'
    ],
    correctAnswer: 'Analyzing source data to understand structure, content, relationships, and quality before designing ETL.'
  },
  {
    id: 'da-90',
    type: 'mcq',
    category: 'ETL Processes',
    text: 'What is "Orchestration" tools like Airflow/Prefect?',
    options: [
      'Tools for orchestrating musical data.',
      'Platforms to schedule, monitor, and manage complex data pipeline workflows with dependencies.',
      'Tools for orchestrating database migrations.',
      'Orchestration of data team meetings.'
    ],
    correctAnswer: 'Platforms to schedule, monitor, and manage complex data pipeline workflows with dependencies.'
  },

  // ==================== ADVANCED EXCEL & TOOLS (Questions 91-100) ====================
  {
    id: 'da-91',
    type: 'mcq',
    category: 'Advanced Excel',
    text: 'What is "Power Query" (M Language) used for in Excel?',
    options: [
      'Querying electrical power usage.',
      'Data transformation and ETL tool for importing, cleaning, and shaping data from various sources.',
      'A query tool for Power BI only.',
      'A method to query powerful computers.'
    ],
    correctAnswer: 'Data transformation and ETL tool for importing, cleaning, and shaping data from various sources.'
  },
  {
    id: 'da-92',
    type: 'mcq',
    category: 'Advanced Excel',
    text: 'What is "Power Pivot" and DAX (Data Analysis Expressions)?',
    options: [
      'A pivot table with power features.',
      'An in-memory data modeling engine with formula language for creating calculated columns and measures.',
      'A method to pivot power data.',
      'A pivot table for electrical power analysis.'
    ],
    correctAnswer: 'An in-memory data modeling engine with formula language for creating calculated columns and measures.'
  },
  {
    id: 'da-93',
    type: 'mcq',
    category: 'Advanced Excel',
    text: 'What is "Array Formula" in Excel (legacy CSE vs dynamic arrays)?',
    options: [
      'Formulas arranged in an array format.',
      'Formulas that return multiple values; legacy versions required Ctrl+Shift+Enter, modern Excel uses dynamic spilled arrays.',
      'A formula for calculating array sizes.',
      'Formulas only for array data structures.'
    ],
    correctAnswer: 'Formulas that return multiple values; legacy versions required Ctrl+Shift+Enter, modern Excel uses dynamic spilled arrays.'
  },
  {
    id: 'da-94',
    type: 'mcq',
    category: 'Advanced Excel',
    text: 'What is "XLOOKUP" improvement over VLOOKUP/HLOOKUP?',
    options: [
      'It looks up data faster.',
      'Searches in any direction, handles errors better, and uses exact matching by default without column index limitations.',
      'It can only look up X-axis data.',
      'A lookup method for XML data only.'
    ],
    correctAnswer: 'Searches in any direction, handles errors better, and uses exact matching by default without column index limitations.'
  },
  {
    id: 'da-95',
    type: 'mcq',
    category: 'Advanced Excel',
    text: 'What is "LET" function in modern Excel?',
    options: [
      'A function that lets you do anything.',
      'Defines named variables to store intermediate calculations, improving readability and performance.',
      'A function to let users edit cells.',
      'A permission function for Excel.'
    ],
    correctAnswer: 'Defines named variables to store intermediate calculations, improving readability and performance.'
  },
  {
    id: 'da-96',
    type: 'mcq',
    category: 'Advanced Excel',
    text: 'What is "LAMBDA" function in Excel and its significance?',
    options: [
      'A function from lambda calculus only.',
      'Enables creation of custom, reusable functions without VBA, making Excel Turing-complete.',
      'A function to calculate wavelength.',
      'A lambda-shaped chart type.'
    ],
    correctAnswer: 'Enables creation of custom, reusable functions without VBA, making Excel Turing-complete.'
  },
  {
    id: 'da-97',
    type: 'mcq',
    category: 'Advanced Excel',
    text: 'What is "Pivot Table" calculated fields vs calculated items?',
    options: [
      'They are the same thing with different names.',
      'Calculated fields use other fields in formulas; calculated items use specific items within a field.',
      'Calculated fields are for numbers; calculated items are for text.',
      'Calculated items are more accurate than fields.'
    ],
    correctAnswer: 'Calculated fields use other fields in formulas; calculated items use specific items within a field.'
  },
  {
    id: 'da-98',
    type: 'mcq',
    category: 'Advanced Excel',
    text: 'What is "Goal Seek" vs "Solver" in Excel?',
    options: [
      'They are identical tools for seeking goals.',
      'Goal Seek adjusts one input for a specific output; Solver handles multiple variables with constraints for optimization.',
      'Goal Seek is for financial goals only; Solver is for engineering.',
      'Solver is a newer version of Goal Seek.'
    ],
    correctAnswer: 'Goal Seek adjusts one input for a specific output; Solver handles multiple variables with constraints for optimization.'
  },
  {
    id: 'da-99',
    type: 'mcq',
    category: 'Advanced Excel',
    text: 'What is "Data Validation" in Excel best practices?',
    options: [
      'Validating that data exists.',
      'Restricting input types, creating drop-down lists, and preventing data entry errors at the source.',
      'Validating data after analysis is complete.',
      'A method to validate external data sources.'
    ],
    correctAnswer: 'Restricting input types, creating drop-down lists, and preventing data entry errors at the source.'
  },
  {
    id: 'da-100',
    type: 'mcq',
    category: 'Advanced Excel',
    text: 'What is "Power BI" vs "Excel Power Pivot" relationship?',
    options: [
      'They are completely unrelated products.',
      'Power BI evolved from Power Pivot technology, sharing DAX and data modeling concepts but with different focuses.',
      'Power BI is the free version of Excel.',
      'Power Pivot is a feature within Power BI only.'
    ],
    correctAnswer: 'Power BI evolved from Power Pivot technology, sharing DAX and data modeling concepts but with different focuses.'
  }
];