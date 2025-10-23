import { ItemModel } from "../models/itemModel.js";

export const ItemController = {
  async create(req, res) {
    try {
      const payload = req.body;
      if (!payload?.customer_name) return res.status(400).json({ error: 'Field customer_name is required' });

      const item = await ItemModel.create(payload);
      res.status(201).json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getAll(req, res) {
    try {
      const { status, page, limit } = req.query;
      const pageNum = Math.max(parseInt(page || '1'), 1);
      const lim = parseInt(limit || '20');
      const offset = (pageNum - 1) * lim;

      const items = await ItemModel.getAll({ status, limit: lim, offset });
      res.json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const item = await ItemModel.getById(req.params.id);
      res.json(item);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const item = await ItemModel.update(req.params.id, req.body);
      res.json(item);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async remove(req, res) {
    try {
      await ItemModel.remove(req.params.id);
      res.json({ message: 'Deleted' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async count(req, res) {
    try {
      const total = await ItemModel.countAll();
      res.json({ total });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};