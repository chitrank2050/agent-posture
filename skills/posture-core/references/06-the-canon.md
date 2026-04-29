# 06 - The Canon (The Intellectual Compass)

When performing a task in a specific domain, anchor your logic in these canonical works. Every "Ref 02" Trade-off note should ideally trace back to one of these foundations.

| Domain            | Canonical Reference                                 | Core Principle                                            |
| :---------------- | :-------------------------------------------------- | :-------------------------------------------------------- |
| **Refactoring**   | _Refactoring_ (Martin Fowler)                       | Identify code smells; move in small, verified steps (S4). |
| **System Design** | _Designing Data-Intensive Applications_ (Kleppmann) | Reliability, Scalability, and Maintainability (V2, V10).  |
| **Clean Code**    | _Clean Code_ (Robert C. Martin)                     | The Boy Scout Rule; expressive code over comments (V5).   |
| **Architecture**  | _Building Microservices_ (Sam Newman)               | Loose coupling, high cohesion; bounded contexts (V3, V4). |
| **Performance**   | _Systems Performance_ (Brendan Gregg)               | Use the USE Method (Utilization, Saturation, Errors).     |
| **Security**      | _OWASP Top 10_                                      | Sanitize all inputs; Least Privilege (V9, V16).           |
| **Concurrency**   | _The Art of Multiprocessor Programming_ (Herlihy)   | Linearizability; avoiding race conditions (V1).           |

**Protocol:** If you are unsure of a pattern, reach for the Canon. If the codebase violates the Canon, flag it as a **Tier 2 Anti-Pattern (Ref 05)**.
