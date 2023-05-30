import Router   from "express";

const router = Router();

const spacecrafts = [{
    id: 1,
    name: "Apollo 11"
}];

/**
 * @openapi
 * /api/spacecrafts:
 *   get:
 *    description: Get all spacecrafts
 *   responses:
 *    200:
 *    description: Returns all spacecrafts
 *   content:
 *   application/json:
 */

router.get("/api/spacecrafts", (req, res) => {
    res.send({ data: spacecrafts });
});

/**
 * @openapi
 * /api/spacecrafts:
 *  post:
 *   description: Create a new spacecraft
 *  responses:
 *  200:
 *  description: Returns the spacecraft that was created
 * content:
 * application/json:
 */

router.post("/api/spacecrafts", (req, res) => {
    const spacecraft = req.body;
    spacecrafts.push(spacecraft);
    res.send({ data: spacecraft });
});


export default router;
